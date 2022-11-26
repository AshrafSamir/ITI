#include <iostream>
using namespace std;

class Complex
{
    float real,img;
    public:
        Complex()
        {

        }
        Complex(float r,float i)
        {
            real = r;
            img = i;
        }
    void setVal(float r, float i)
    {
        real = r;
        img = i;
    }
    float getReal(){return real;}
    float getImg(){return img;}
    friend ostream& operator<<(ostream &, Complex);
    friend istream& operator>>(istream &, Complex & );
};

ostream& operator<<(ostream &ms, Complex c)
{
    ms<<"("<<c.getReal()<<"+ i" << c.getImg()<<")";
    return ms;
}


istream& operator>>(istream &ms, Complex &c)
{
    float n1, n2;
    ms>>n1;
    ms>>n2;
    c.setVal(n1,n2);
    return ms;
}
int main()
{
    Complex c;
    //c.setVal(10, 5);
    cin>>c;
    cout<<c;

    return 0;
}

