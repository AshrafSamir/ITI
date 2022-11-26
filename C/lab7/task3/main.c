#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

#define SIZE 20

void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
        GetStdHandle( STD_OUTPUT_HANDLE ),
        coord
    );
}


int main()
{
    char key ;
    int x=1 ;
    int lines, line = 0, size;

    printf("Enter num of lines: \n");
    scanf("%d",&lines);
    printf("Enter size of string: \n");
    scanf("%d",&size);
    system("cls");

    char **ptr_lines = (char**)malloc(lines*sizeof(char*));

    for(int i=0; i<lines; i++)
    {
        ptr_lines[i] = (char*)malloc(size*sizeof(char));
        for(int j=0; j<size; j++){
            ptr_lines[i][j] = ' ';
        }

    }

    int ccx = 0, ccy = 0;


    gotoxy(0+ccx,0+ccy);
    do
    {
        key = getch();
        switch(key)
        {
        case -32:
            key = getch();
            switch(key)
            {
            case 72:
                if(ccy>0)
                {
                    ccy--;
                    gotoxy(ccx,ccy);
                }
                break;
            case 80:
                if(ccy<lines-1)
                {
                    ccy++;
                    gotoxy(ccx,ccy);
                }
                break;
            case 71:
                ccx=0;
                ccy=0;
                gotoxy(ccx,ccy);
                break;
            case 79:
                ccx=size-1;
                ccy=lines-1;
                gotoxy(ccx,ccy);

                break;
            case 75:
                if(ccx > 0)
                {
                    ccx--;
                    gotoxy(ccx,ccy);
                }

                break;
            case 77:
                if(ccx < size-1)
                {
                    ccx++;
                    gotoxy(ccx,ccy);
                }
                break;
            }
            break;
        case 13:
        case 27:
            x=0;
            break;
        default:
            if((ccx<size-1)&&(ccy<lines)){
                printf("%c", key);
                ptr_lines[ccy][ccx] = key;
                ccx++;
                gotoxy(ccx,ccy);
                if(ccx < size-1 )break;
                gotoxy(ccx,ccy);
            }
            break;
        }

    }
    while(x==1);

    system("cls");
    printf("your input : \n");
    for(int i=0; i<lines; i++)
    {
        for(int j=0; j<size; j++){
            printf("%c",ptr_lines[i][j]);
        }

        printf("\n");
    }

    return 0;
}
