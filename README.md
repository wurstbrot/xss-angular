# xss-angular
An insecure application. Inspired by Sebastian Lekies (see https://www.youtube.com/watch?v=iUaZ0_bwcqA).

# Requirements
* docker
* docker-compose

# Run
Run `docker-compose` up in this folder.

# Examples
## Example 0: Example for an angular application 
http://localhost/0-angular-example

## Example 1: Reflected XSS in server-based code (PHP) 
http://localhost/1-bad/?input=%3Cscript%3Ealert(1)%3C/script%3E

## Example 2: Angular masking with sanitizer
Shows how angular masks for example input with <script>
http://localhost/2-angular

## Example 3: Server Side template injection (wrong way)
http://localhost/3-angular-server-side-template-injection/?name=%3Cscript%3Ealert(1)%3C/script%3E
http://localhost/3-angular-server-side-template-injection/?name={{deleteUserAccount()}}

## Example 4: Using variables from server-side (right way)
http://localhost/3-good/?name={{deleteUserAccount()}}

## Example 5:
Show http://localhost/2-angular with input <b>Timo</b> and <img src=foo onerror=alert(1)>

## Example 6:
Show http://localhost/2-angular with input <b>Timo</b> and <img src=foo onerror=alert(1)> and <iframe src=foo onmouseover="alert(1)">

## Example 7: Show the corret way with ngSanitize
http://localhost/7-angular-enrich-user-input-with-ngBindHtml/
