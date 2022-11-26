using namespace std;
#include <iostream>


class GeoShape{

protected:
    float dm1, dm2;

public:
    GeoShape(){
        dm1=dm2 =0;
    }
    GeoShape(float d){
        dm1=dm2 =d;
    }
    GeoShape(float d1, float d2){
        dm1= d1;
        dm2 =d2;
    }

    void setDm1(float d){
        dm1 = d;
    }
    void setDm2(float d){
        dm2 = d;
    }

    float getDm1(){
        return dm1;
    }
    float getDm2(){
        return dm2;
    }
    virtual float calcArea()=0;
    /*virtual float calcArea(){
        return 0.0;
    }*/
};

class Circle: public GeoShape{
public:
    Circle(){
    }

    Circle(float r):GeoShape(r){
    }

    float calcArea(){
        return 3.14*dm1*dm2;
    }
};

class Rect : public GeoShape{

public:
    Rect(){
    }

    Rect(float w, float l): GeoShape(w,l){
    }
    float calcArea(){
        return dm1*dm2;
    }
};

class Square : public Rect{

public:
    Square(){
    }
    Square(float l): Rect(l, l){
    }
};

class Triangle : public GeoShape{

public:
    Triangle(){
    }
    Triangle(float b, float h): GeoShape(b, h){
    }
    float calcArea()
    {
        return 0.5*dm1*dm2;
    }
};

float sumOfGeoAreas(GeoShape *g1, GeoShape *g2, GeoShape *g3)
{
    return g1->calcArea() + g2->calcArea() + g3->calcArea();
}


int main()
{
    GeoShape *p;
    Circle myC(10);
    Rect myR(3,4);
    Square myS(7);
    Triangle myT(10,20);

    p = &myR;
    cout<<p->calcArea()<<endl;
    p = &myC;
    cout<<p->calcArea()<<endl;
    p = &myS;
    cout<<p->calcArea()<<endl;
    p = &myT;
    cout<<p->calcArea()<<endl;


    cout<< sumOfGeoAreas(&myS ,&myT ,&myC);

    return 0;
}
