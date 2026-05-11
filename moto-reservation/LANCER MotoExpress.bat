@echo off
title SAYON MOTO TAXI EXPRESS
echo Arret de l'ancien serveur si actif...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 1 /nobreak >nul
echo Demarrage du serveur...
node server.js
pause
