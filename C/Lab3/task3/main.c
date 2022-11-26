#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

void touppercase(char str[21]){
        int j=0;
        char ch;
        while (str[j]) {
        ch = str[j];
        putchar(toupper(ch));
        j++;
    }
}

int main()
{

    char lname[11], fname[11], fullname[5][21];
    for(int i =0; i<5; i++){
        printf("Enter first name: \n");
        gets(fname);
        printf("Enter last name: \n");
        gets(lname);

        strcat(fname," ");
        strcpy(fullname[i],fname);
        strcat(fullname[i],lname);

        printf("your full name \n");
        printf(fullname[i]);
        printf("\n");
        printf("your full name uppercase \n");
        touppercase(fullname[i]);
        printf("\n");

    }
    int indmin = 0;
    int indmax = 0;
    int min = strlen(fullname[0]);
    int max = strlen(fullname[0]);

    for(int i=0;i<5;i++){
        if(strlen(fullname[i])<min){
            indmin = i;
            min = strlen(fullname[i]);
        }
        if(strlen(fullname[i])>max){
            indmax = i;
            max = strlen(fullname[i]);
        }
    }

    printf("shortest name: \n");
    printf(fullname[indmin]);
    printf("\n");
    printf("longest name: \n");
    printf(fullname[indmax]);
    printf("\n");

    return 0;
}
