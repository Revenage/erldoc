module Main exposing (Model, Msg(..), PageView, footer, getLangString, init, main, nav, subscriptions, update, view)

-- import App.Page.Home as Home
-- import App.Page.NotFound as NotFound
-- import App.Page.Settings as Settings

import App.Decoders exposing (..)
import App.Router exposing (..)
import App.Types exposing (..)
import Browser
import Browser.Navigation as Nav
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http
import Json.Decode exposing (Decoder, dict, field, string)
import Url
import Url.Parser exposing (Parser, map, oneOf, parse, s, string, top)


type alias HomeModel =
    { search : String
    , tags : HandleTagResponse
    }


type alias SettingsModel =
    { darkMode : Bool
    }


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    , translateStatus : RespondStatus
    , language : Language
    , home : HomeModel
    , settings : SettingsModel
    }


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | HandleTranslateResponse (Result Http.Error Translations)
    | HandleTagResponse (Result Http.Error Tags)
    | ChangeMode
    | TypeSearch String


type alias PageView =
    { title : String, content : Html Msg }


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


getLangString : Language -> String
getLangString lang =
    case lang of
        English ->
            "en"

        Russian ->
            "ru"

        Ukrainian ->
            "uk"


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( { key = key
      , url = url
      , translateStatus = Loading
      , language = English
      , settings =
            { darkMode = False
            }
      , home =
            { search = ""
            , tags = TagLoading
            }
      }
    , loadPageData
    )


loadPageData : Cmd Msg
loadPageData =
    Cmd.batch
        [ Http.get
            { url = "/translations/en.json"
            , expect = Http.expectJson HandleTranslateResponse decodeTranslations
            }
        , Http.get
            { url = "/content/tags.json"
            , expect = Http.expectJson HandleTagResponse decodeTag
            }
        ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )

        HandleTranslateResponse result ->
            case result of
                Ok translation ->
                    ( { model | translateStatus = Success translation }, Cmd.none )

                Err _ ->
                    ( { model | translateStatus = Failure }, Cmd.none )

        HandleTagResponse result ->
            case result of
                Ok tags ->
                    let
                        oldmodel =
                            model.home

                        newmodel =
                            { oldmodel | tags = TagSuccess tags }
                    in
                    ( { model | home = newmodel }
                    , Cmd.none
                    )

                Err _ ->
                    ( model
                    , Cmd.none
                    )

        ChangeMode ->
            let
                oldSettings =
                    model.settings

                newSettings =
                    { oldSettings | darkMode = not model.settings.darkMode }
            in
            ( { model | settings = newSettings }
            , Cmd.none
            )

        TypeSearch text ->
            let
                oldmodel =
                    model.home

                newmodel =
                    { oldmodel | search = text }
            in
            ( { model | home = newmodel }
            , Cmd.none
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW
-- mainView : PageView -> Model -> Browser.Document Msg
-- mainView pageview model =
--     { title = pageview.title
--     , body =
--         [ nav model
--         , pageview.content
--         , footer model
--         ]
--     }


nav : Model -> Html Msg
nav model =
    header [ class "navbar navbar-fixed-top navbar-inverse" ]
        [ div [ class "container" ]
            [ div [ class "navbar-header" ] []
            , Html.nav [ class "collapse navbar-collapse", id "myNavBar" ]
                [ ul [ class "nav navbar-nav navbar-right" ]
                    [ li []
                        [ a [ href "/" ]
                            [ text "Docs" ]
                        ]
                    , li []
                        [ a [ href "/settings" ]
                            [ text "Settings" ]
                        ]
                    ]
                ]
            ]
        ]


footer : Model -> Html Msg
footer model =
    Html.footer [ class "container" ]
        [ small [] [ text "Copyright © 2019" ]
        , Html.nav []
            [ ul []
                [ li []
                    [ a [ href "/about" ]
                        [ text "About" ]
                    ]
                , li []
                    [ a [ href "/contact" ]
                        [ text "Contact" ]
                    ]
                ]
            ]
        ]


view : Model -> Browser.Document Msg
view model =
    case model.translateStatus of
        Loading ->
            { title = "Loading"
            , body = [ text "Loading" ]
            }

        Success _ ->
            let
                viewPage pageview pagemodel =
                    let
                        { title, content } =
                            pageview pagemodel
                    in
                    { title = title, body = [ nav model, content, footer model ] }
            in
            case toRoute model.url of
                Home ->
                    viewPage homeView model.home

                Settings ->
                    viewPage settingsView model.settings

                NotFound ->
                    notFoundView

        Failure ->
            { title = "Failure"
            , body = [ text "The application failed to initialize. " ]
            }


settingsView : SettingsModel -> { title : String, content : Html Msg }
settingsView model =
    { title = "Settings"
    , content =
        main_ [ id "content", class "container", tabindex -1 ]
            [ h1 [] [ text "Settings" ]
            , div [ class "row" ]
                [ label [ class "checkbox" ]
                    [ input
                        [ type_ "checkbox"
                        , checked <| model.darkMode
                        , onClick <| ChangeMode
                        ]
                        []
                    , text "dark mode"
                    ]
                ]
            ]
    }


homeView : HomeModel -> { title : String, content : Html Msg }
homeView model =
    let
        { tags } =
            model
    in
    { title = "Home Page"
    , content =
        main_ [ id "content", class "container", tabindex -1 ]
            [ h1 [] [ text "Home Page" ]
            , div [ class "row" ]
                [ h3 [] [ text "AAA" ]
                , h3 [] [ text "TEST" ]
                , ul [] (renderList tags)
                ]
            , input [ placeholder "Search: ", value model.search, onInput TypeSearch ] []
            ]
    }


renderList tags =
    if tags == Success then
        List.map toLi tags

    else
        []


toLi : String -> Html Msg
toLi item =
    li [] []


notFoundView : { title : String, body : List (Html msg) }
notFoundView =
    { title = "Page Not Found"
    , body =
        [ main_ [ id "content", class "container", tabindex -1 ]
            [ h1 [] [ text "Not Found" ]
            , div [ class "row" ]
                [ a [ href "/" ]
                    [ text "Docs" ]
                ]
            ]
        ]
    }
