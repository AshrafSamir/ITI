#include <iostream>

using namespace std;
class Complex
{
    float real;
    float img;
    void Add(Complex,Complex);
public:

    Complex()
    {
        real = 0;
        img = 0;
    }
    Complex(float num1,float num2)
    {
        real = num1;
        img = num2;
    }
    Complex(float num1)
    {
        real = 0;
        img = num1;
    }

    void setreal(float r)
    {
        real=r;

    }
    void setimg(float i)
    {
        img=i;

    }
    float getimg()
    {
        return img;

    }
    float getreal()
    {
        return real;

    }

    void print()
    {

        if(real==0&&img==0)
        {
            cout<<img<<endl;
        }
        else if((img==1 || img==-1))
        {
            cout<<real;
            if(img > 0){
                cout << "+";
            }
            else cout << "-";
            cout<<"i"<<endl;
        }
        else if(real!=0&&img!=0)
        {
            cout<<real;
            if(img > 0){
                cout << "+";
            }
            cout<<img<<"i"<<endl;
        }

    }

    ~Complex()
    {
        cout<<"hi i'm destructor \n";
    }

};
Complex Add(Complex c1,Complex c2)
{
    struct Complex sum;
    sum.setreal(c1.getreal()+c2.getreal());
    sum.setimg(c1.getimg()+c2.getimg());
    return sum;

}
Complex Add(float c1,Complex c2)
{
    struct Complex sum;
    sum.setreal(c1+c2.getreal());
    sum.setimg(c2.getimg());
    return sum;
}
Complex Add(Complex c1,float c2)
{
    struct Complex sum;
    sum.setreal(c2+(c1.getreal()));
    sum.setimg(c1.getimg());
    return sum;
}

Complex Add(Complex c1,Complex c2, Complex c3)
{
    struct Complex sum;
    sum.setreal(c1.getreal()+c2.getreal()+c3.getreal());
    sum.setimg(c1.getimg()+c2.getimg()+c3.getimg());
    return sum;

}

int main()
{
    int sizeval = 3;
    struct Complex c[sizeval], sum;
    float n;


    for(int i=0; i<sizeval; i++)
    {
        cout << "Enter the real number : ";
        cin>>n;
        c[i].setreal(n);
        cout << "Enter the img number : ";
        cin>>n;
        c[i].setimg(n);
        c[i].print();
    }


    sum = Add(c[0],c[1]);
    sum.print();
    sum = Add(3.4,c[2]);
    sum.print();
    sum = Add(c[1],3.4);
    sum.print();
    sum = Add(c[0],c[1],c[2]);
    sum.print();


    return 0;
}
