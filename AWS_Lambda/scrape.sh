#!/bin/sh

curl --silent https://www.brainyquote.com/authors/kanye-west-quotes | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' > test_kanye_quoutes.txt
curl --silent https://www.brainyquote.com/authors/kanye-west-quotes_2 | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' >> test_kanye_quoutes.txt
curl --silent https://www.brainyquote.com/authors/kanye-west-quotes_3 | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' >> test_kanye_quoutes.txt
