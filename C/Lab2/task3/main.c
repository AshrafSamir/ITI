#include <stdio.h>
#include <stdlib.h>


int main()
{
    char c;
    while(1){
        printf("N- New: \n");
        printf("D- Display: \n");
        printf("E- Exit: \n");

        printf("Enter char: \n");
        scanf("%c", &c);

        switch(c){
            case 'N':
            case 'n':
                system("CLS");
                printf("New \n");
                scanf("%c", &c);
                break;
            case 'D':
            case 'd':
                system("CLS");
                printf("Display \n");
                scanf("%c", &c);
                break;
            case 'E':
            case 'e':
                return 0;
            default:
                system("CLS");
                printf("wrong char \n");


        }

    }


    return 0;
}
