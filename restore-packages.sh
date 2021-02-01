rm -rf **/**/node modules
cp -r aula03 aula04
cd aula03
for item in 'ls';
do
    echo $item
    cd $item
    npm ci --silent
    cd ..
done