#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
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

    int s;
    scanf("%d",&s);
    //s = getchar();
    int row = 1;
    int col = 2;
    for(int i=1;i<=(s*s);i++){

        gotoxy(col*4,row*4);
        printf("%d",i);
        if(i%s == 0)row++;
        else{
            row--;
            col--;
        }

        if(col<1)col = s;
        else if(col>s)col = 1;

        if(row<1)row = s;
        else if(row>s)row = 1;

    }






    return 0;
}
