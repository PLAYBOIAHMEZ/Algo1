ALGORITHM sentence_read

//\* the sentence is a variable called**sentence** sentence: string

BEGIN //**Reading the sentence as an array**// read(sentence)

//**Calculate the length of the sentence **// WHILE (sentence[i] <>".") DO SLength:=SLength+1; i=i+1; END_WHILE //**Calculate the nb of Vowels "a" "e" "u" "i" "o"\***// WHILE (k) IF (sentence[k]="a" OR sentence[k]="e" OR sentence[k]="u" OR sentence[k]="i" OR sentence[k]="o") THEN NbVowels=NbVowels+1; k:k+1; END_IF END_WHILE

write(SLength, NbWords, NbVowels);
END
