@echo off
cls
color 0a
echo Press a button to install the requirements...
echo.
echo.
pause >nul
cls
echo Getting things ready...
ping localhost -n 4 >nul
cls
echo Ready to install Discord.js! Press a button to continue...
pause >nul
cls
npm install discord.js --save
echo.
echo.
echo Press a button to continue...
pause >nul
cls
echo Ready to install nodemon! Press a button to continue...
pause >nul
cls
npm install -g nodemon
echo.
echo.
echo Press a button to continue...
pause >nul