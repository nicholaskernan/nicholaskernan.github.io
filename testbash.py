
import subprocess
 
# If your shell script has shebang,
# you can omit shell=True argument.
print(subprocess.run(["./testbash.sh",""], shell=True))

#scp -i ~/.ssh/google_compute_engine ./testbash.sh nicholas_kernan@34.23.66.59:~
