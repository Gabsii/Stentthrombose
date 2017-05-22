
cd src/php
if exist "c:\xampp" (
  xcopy "*.*" "c:\xampp\htdocs\Stentthrombose-API" /y
) else (
  xcopy "*.*" "d:\xampp\htdocs\Stentthrombose-API" /y
)
pause
