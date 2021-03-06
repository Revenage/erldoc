module Types exposing (Doc, DocStatus(..), Language(..), TagStatus(..), Tags, TranslateStatus(..), Translation, Translations)

import Browser
import Browser.Navigation as Nav
import Dict exposing (Dict)
import Html exposing (Html)
import Http
import Url


type TranslateStatus
    = TranslateFailure
    | TranslateLoading
    | TranslateSuccess Translation


type TagStatus
    = TagFailure
    | TagLoading
    | TagSuccess Tags


type DocStatus
    = DocFailure
    | DocLoading
    | DocSuccess Doc
    | DocEmpty


type Language
    = English
    | Russian
    | Ukrainian


type alias Translation =
    Dict String String


type alias Translations =
    Dict String Translation


type alias Tags =
    List (List String)


type alias Doc =
    { name : String
    , summary : String
    , description : String
    , funcs : String
    }
