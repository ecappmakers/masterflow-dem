ember build --environment=production -o ../masterflow-build
cd ../masterflow-build
git init
git remote add origin https://github.com/ecappmakers/masterflow-build.git
git branch -M main
git pull origin main --rebase
git add *
git commit -m "Commit"
git pull origin main --rebase
git push origin main --force
cd ../masterflow-dem
echo "Build Completed"