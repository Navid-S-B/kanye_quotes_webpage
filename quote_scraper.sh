#!/bin/sh
# Used this to scrape kanye quotes from websites

curl --silent https://www.brainyquote.com/authors/kanye-west-quotes | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' > AWS_Lambda/kanye_quoutes.txt
curl --silent https://www.brainyquote.com/authors/kanye-west-quotes_2 | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' >> AWS_Lambda/kanye_quoutes.txt
curl --silent https://www.brainyquote.com/authors/kanye-west-quotes_3 | grep 'view quote' | sed 's/^.*quote">//' | sed 's/<.*$//' >> AWS_Lambda/kanye_quoutes.txt

# Cant find sed command to replace (').