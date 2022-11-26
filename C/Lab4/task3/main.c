#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}
int main()
{
char arr[3][10] = { {"new"}, {"display"}, {"exit"} };
    int selected = 0 ;
    char key ;
    int i,x=1 ;
    while(x==1)
    {
        for(i = 0 ; i<3 ; i++)
        {
            if(i==selected)
            {
                textattr(50);
                puts(arr[i]);
            }
            else
            {
                textattr(0x7);
                puts(arr[i]);
            }
                textattr(0x7);
        }
        key = getch();
        if(key == -32)
        {
            key = getch();
            if (key == 80 )
            {
                selected++;

                if(selected >2)selected=0;
            }
            else if (key == 72)
            {
                selected--;
                if(selected <0)selected=2;

            }


        }

        else{
            if (key == 13)
            {
                if(selected == 0)
                {
                   printf("new");
                   getch();
                }
                else if (selected == 1)
                {
                     printf("display");
                     getch();
                }
                else if (selected == 2)
                {
                     printf("exit");
                     x= 0 ;
                }

            }
             else if (key == 27)
            {
                printf("escape");
                x= 0;
            }
        }
        system("cls");
    }
    return 0;
}
