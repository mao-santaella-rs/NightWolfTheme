-- Haskell example: small but comprehensive

{-# LANGUAGE DeriveFunctor #-}

module Main where

import Control.Monad (forM_)
import Data.Maybe (fromMaybe)

-- Simple ADT and typeclass
data Person = Person { name :: String, age :: Int } deriving (Show)

class Describable a where
    describe :: a -> String

instance Describable Person where
    describe (Person n a) = "Person(name=" ++ n ++ ", age=" ++ show a ++ ")"

-- Functor example
newtype Identity a = Identity { runIdentity :: a } deriving (Show, Functor)

-- Safe divide
safeDiv :: Double -> Double -> Maybe Double
safeDiv _ 0 = Nothing
safeDiv a b = Just (a / b)

main :: IO ()
main = do
    let p = Person "Noah" 41
    putStrLn $ describe p

    case safeDiv 10 2 of
        Just r -> putStrLn $ "10 / 2 = " ++ show r
        Nothing -> putStrLn "Division by zero"

    -- Using functor
    print $ fmap (+1) (Identity 5)

    -- List comprehensions and higher-order functions
    let numbers = [1..5]
    print $ map (*2) numbers
    forM_ numbers $ \n -> putStrLn $ "num: " ++ show n

    -- Maybe and fromMaybe
    putStrLn $ "safeDiv 1 0 => " ++ show (fromMaybe (-1) (safeDiv 1 0))
