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

    Complex operator+(Complex);
    Complex operator+(float ) ;
    Complex operator-(Complex);
    Complex operator-(float ) ;
    Complex operator*(Complex);
    Complex operator*(float ) ;
    friend Complex operator+( float ,Complex);
    friend Complex operator-( float ,Complex);
    friend Complex operator*( float ,Complex);
    Complex operator++();
    Complex operator+=(Complex c);
    Complex operator++(int);
    Complex operator--();
    Complex operator-=(Complex c);
    Complex operator--(int);
    Complex & operator=(Complex const &c);
    int operator==(Complex c);
    int operator!=(Complex c);
    int operator>(Complex c);
    int operator<(Complex c);
    operator float();
    operator int();

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
        //cout<<"hi i'm destructor \n";
    }

};

Complex Complex::operator*(float  f)
{
    Complex res;
    res.real=real*f;
    res.img=img;
    return res;
}
Complex Complex::operator*( Complex c)
{
    Complex res;
    res.real=real*c.real;
    res.img=img+c.img;
    return res;

}
Complex operator*(float f,Complex c)
{
    Complex res;
    res.setreal(f*c.getreal());
    //res.real=(f+c.getreal());
    res.setimg(c.getimg());
    return res;
 }
Complex Complex::operator+(float  f)
{
    Complex res;
    res.real=real+f;
    res.img=img;
    return res;
}
Complex Complex::operator+( Complex c)
{
    Complex res;
    res.real=real+c.real;
    res.img=img+c.img;
    return res;

}
Complex operator+(float f,Complex c)
{
    Complex res;
    res.setreal(f+c.getreal());
    //res.real=(f+c.getreal());
    res.setimg(c.getimg());
    return res;
 }
Complex Complex::operator-(float  f)
{
    Complex res;
    res.real=real-f;
    res.img=img;
    return res;
}
Complex Complex::operator-( Complex c)
{
    Complex res;
    res.real=real-c.real;
    res.img=img-c.img;
    return res;

}
Complex operator-(float f,Complex c)
{
    Complex res;
    res.setreal(f-c.getreal());
    //res.real=(f+c.getreal());
    res.setimg(c.getimg());
    return res;
 }
Complex Complex::operator++(int)
{
    Complex temp=*this;
    real++;
    return temp;
}
Complex Complex::operator++()
{
    real++;
    return *this;
}
Complex Complex::operator--(int)
{
    Complex temp=*this;
    real--;
    return temp;
}
Complex Complex::operator--()
{
    real--;
    return *this;
}
Complex Complex::operator+=(Complex c)
{
     real=real+c.real;
     img=img+c.img;
     return *this;
 }
Complex Complex::operator-=(Complex c)
{
     real=real-c.real;
     img=img-c.img;
     return *this;
 }
Complex & Complex::operator=(Complex const &c)
 {
     real=c.real;
     img=c.img;
     return *this;
 }
int Complex::operator==(Complex c)
{
    return((c.real == real)&&(c.img == img));
}
int Complex::operator!=(Complex c)
{
    return(!((c.real == real)&&(c.img == img)));
}
int Complex::operator>(Complex c)
{
    return(((real > c.real)&&(img > c.img)));
}
int Complex::operator<(Complex c)
{
    return(((real < c.real)&&(img < c.img)));
}
Complex::operator float()
{
    return real;
}
Complex::operator int()
{
    return (int)real;
}

int main()
{
    int sizeval = 2;
    struct Complex c[sizeval], sum;
    float n;
    Complex temp;
    int n1;


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

    c[0]++;
    c[0].print();
    ++c[0];
    c[0].print();
    c[0]--;
    c[0].print();
    --c[0];
    c[0].print();
    c[0]+=2;
    c[0].print();
    c[0]-=2;
    c[0].print();
    temp = c[0]+c[0];
    temp.print();
    n1 = (c[0]==(c[1]));

    cout<<n1<<endl;




    return 0;
}
