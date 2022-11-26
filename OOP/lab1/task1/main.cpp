#include <iostream>

using namespace std;
struct complex
{
    float real;
    float img;
    void Add(complex,complex);
    void print()
    {
        int flag=0;
       if(real!=0&&img!=0)
       {
          cout<<real;
           cout << "+";
           cout<<img<<"i"<<endl;
           flag=1;
       }


         if(real==0&&flag==0)
         {
             cout<<img<<"i"<<endl;
         }
         if(exit==0&&flag==0)
         {
             cout<<real<<endl;
         }

    }

};
    void Add(complex c1,complex c2)
    {
        complex sum;
        sum.real=c1.real+c2.real;
        sum.img=c2.img+c1.img;
        cout << "the Add is: " << endl;
        sum.print();

    }
int main()
{
    struct complex c1,c2;

    cout << "Enter the real number : " << endl;
    cin>>c1.real;
    cout << "Enter the img number : " << endl;
    cin>>c1.img;
    c1.print();
    cout << "Enter the real number : " << endl;
    cin>>c2.real;
    cout << "Enter the img number : " << endl;
    cin>>c2.img;
    c2.print();
    complex v;
    Add(c1,c2);


    return 0;
}
