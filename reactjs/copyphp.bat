cd ../api
if exist "c:\xampp" (
  mkdir c:\xampp\htdocs\Stentthrombose\api
  xcopy "*.*" "c:\xampp\htdocs\Stentthrombose\api" /y /s
) else (
  xcopy "*.*" "d:\xampp\htdocs\Stentthrombose\api\" /y /s
)
pause
