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
    char str[SIZE], *p_st = &str[0], *p_en = &str[0], *p_cur = &str[0];
    int cs = 0,cc = 0,ce = 0;


    gotoxy(0+cc,0);
    do
    {
        key = getch();
        switch(key)
        {
        case -32:
            key = getch();
            switch(key)
            {
            case 71:
                cc=0;
                gotoxy(cc,0);
                p_cur = p_st;
                break;
            case 79:
                cc=ce-1;
                gotoxy(cc,0);
                p_cur = p_en-1;

                break;
            case 75:
                if(p_cur > p_st)
                {
                    p_cur--;
                    cc--;
                    gotoxy(cc,0);
                }

                break;
            case 77:
                if(p_cur < p_en)
                {
                    p_cur++;
                    cc++;
                    gotoxy(cc,0);
                }
                break;
            }
            break;
        case 13:
        case 27:
            x=0;
            break;
        default:
            printf("%c", key);
            *p_cur = key;
            p_cur++;
            cc++;
            gotoxy(cc,0);
            if(cc < ce )break;
            p_en++;
            ce++;
            gotoxy(cc,0);
            break;
        }

    }
    while(x==1);

    str[SIZE] = '\0';

    printf("\n",str);
    printf("%s",str);



    return 0;
}
