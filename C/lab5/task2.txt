#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <windows.h>

#define LILEN 5
#define SIZE 10



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

struct fullname
{
    char fname[11],lname[11];
};
struct employee
{
    struct fullname name;
    int code,age,salary,tax,bonus;
};

static struct employee emps[SIZE];
static int indexes[SIZE]={0};

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}

void newemp(){
    char temp1[11];
    char temp2[11];
    int ind=1;
    int flag = 1;


    while(flag!=0){

        printf("Enter index: \n");
        scanf("%d",&ind);
        system("cls");

        if(ind==0)flag=0;
        if(flag != 0){
            if(ind!=0)indexes[ind-1]=1;

            gotoxy(10,2);
            printf("Employee %d",ind);

            gotoxy(0,5);
            printf("Code:");
            scanf("%d",&emps[ind-1].code);


            gotoxy(20,5);
            printf("Age:");
            scanf("%d",&emps[ind-1].age);

            gotoxy(0,10);
            printf("Fname:");
            scanf("%s",temp1);
            strcpy(emps[ind-1].name.fname,temp1);

            gotoxy(20,10);
            printf("Lname:");
            scanf("%s",temp2);
            strcpy(emps[ind-1].name.lname,temp2);

            gotoxy(0,15);
            printf("Sal:");
            scanf("%d",&emps[ind-1].salary);

            gotoxy(20,15);
            printf("Bonus:");
            scanf("%d",&emps[ind-1].bonus);

            gotoxy(0,20);
            printf("Tax:");
            scanf("%d",&emps[ind-1].tax);

            gotoxy(5,25);
            printf("NEXT>>");

            system("cls");
        }

        //getch();
    }
}

void displayall(){
    for(int i=0;i<SIZE;i++){
        gotoxy(10,0);
        printf("Employee %d",i);

        gotoxy(0,5);
        printf("Code: %d",emps[i].code);

        gotoxy(20,5);
        printf("Age: %d",emps[i].age);

        gotoxy(0,10);
        printf("Name: %s %s",emps[i].name.fname,emps[i].name.lname);


        gotoxy(20,10);
        printf("Net Salary: %d",(emps[i].salary + emps[i].bonus) - emps[i].tax);

        getch();


    }
}

void display(){
        for(int i=0;i<SIZE;i++){

        if(indexes[i]!=0){
            gotoxy(10,2);
            printf("Employee %d",i+1);

            gotoxy(0,5);
            printf("Code: %d",emps[i].code);

            gotoxy(20,5);
            printf("Age: %d",emps[i].age);

            gotoxy(0,10);
            printf("Name: %s %s",emps[i].name.fname,emps[i].name.lname);


            gotoxy(20,10);
            printf("Net Salary: %d",(emps[i].salary + emps[i].bonus) - emps[i].tax);

            getch();

        }
    }
}

void search(int netSal){
    for(int i=0;i<SIZE;i++){

        if(indexes[i]!=0 &&(netSal == (emps[i].salary + emps[i].bonus) - emps[i].tax)){
            gotoxy(10,2);
            printf("Employee %d",i+1);

            gotoxy(0,5);
            printf("Code: %d",emps[i].code);

            gotoxy(20,5);
            printf("Age: %d",emps[i].age);

            gotoxy(0,10);
            printf("Name: %s %s",emps[i].name.fname,emps[i].name.lname);


            gotoxy(20,10);
            printf("Net Salary: %d",(netSal == (emps[i].salary + emps[i].bonus) - emps[i].tax));

            getch();

        }
    }
}
int main()
{
char arr[LILEN][10] = { {"New"}, {"Display"}, {"view_all"},{"Search"}, {"Exit"} };
    int selected = 0 ;
    char key ;
    int i,x=1 ;
    while(x==1)
    {
        for(i = 0 ; i<LILEN ; i++)
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

                if(selected >LILEN-1)selected=0;
            }
            else if (key == 72)
            {
                selected--;
                if(selected <0)selected=LILEN-1;

            }


        }

        else{
            if (key == 13)
            {
                switch(selected){
                case 0:

                   newemp();
                   break;
                case 1:
                   display();
                   break;
                case 2:
                    displayall();
                    break;
                case 3:
                    printf("Enter net salary: \n");
                    int netsal;
                    scanf("%d",&netsal);
                    search(netsal);
                    break;
                case 4:
                     printf("exit");
                     x= 0 ;
                     break;
                default:
                    printf("wrong input \n");
                    break;

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
