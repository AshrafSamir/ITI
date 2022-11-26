#include <iostream>
#include "graphics.h"

using namespace std;

class Point {
    int x,y;
public:
    Point(){
        x=y=0;
    }
    Point(int x , int y){
        this->x=x;
        this->y=y;
    }
    Point(int n){
    this->x=this->y=n;
    }


    Point(Point&p){
        this->x=p.x;
        this->y=p.y;
    }

    int getX(){
        return x;
    }
    int getY(){
        return y;
    }
    void setX(int x){
        this->x=x;
    }
    void setY(int y){
        this->y=y;
    }
};
class Circle{
    int rad;
    Point cent;
public:

    Circle(){};
    Circle(int rad){this->rad=rad;}
    Circle(int x , int y, int rad):cent(x,y){
        this->rad=rad;
    }
    Circle(Point p , int rad):cent(p){
        this->rad=rad;
    }
    void setRad(int rad){
        this->rad=rad;
    }
    int getRad(){
        return rad;
    }

    Point getCentObj(){
        Point p = this->cent;
        return p;
    }

    void getCenter(int &x,int &y){
        x=this->cent.getX();
        y=this->cent.getY();
    }

    void draw(){
        circle(cent.getX(),cent.getY(),rad);
    }

};
class Rect{
    Point ul,lr;
public:
    Rect(){}
    Rect(int x1,int y1,int x2,int y2):ul(x1,y1),lr(x2,y2)
    {}
    Rect(Point L , Point R):ul(L),lr(R)
    {}
    void setUl(int x , int y){
        this->ul.setX(x);
        this->ul.setY(y);
    }
    void setLr(int x , int y){
        this->lr.setX(x);
        this->lr.setY(y);
    }

    Point getUlObj(){
        Point p = ul;
        return p;
    }
    Point getLrObj(){
        Point p = lr;
        return p;
    }

    void getUl(int &x,int &y){
        x=this->ul.getX();
        y=this->ul.getY();
    }
    void getLr(int &x,int &y){
        x=this->lr.getX();
        y=this->lr.getY();
    }

    void draw(){
        rectangle(ul.getX(),ul.getY(),lr.getX(),lr.getY());
    }
};
class Line{
    Point p1,p2;
public:
    Line(){}
    Line(int x1,int y1,int x2,int y2):p1(x1,y1),p2(x2,y2)
    {}
    Line(Point L , Point R):p1(L),p2(R)
    {}
    void setP1(int x , int y){
        this->p1.setX(x);
        this->p1.setY(y);
    }
    void setP2(int x , int y){
        this->p2.setX(x);
        this->p2.setY(y);
    }

    Point getp1Obj(){
        Point p = p1;
        return p;
    }
    Point getp2Obj(){
        Point p = p2;
        return p;
    }
    void getP1(int &x,int &y){
        x=this->p1.getX();
        y=this->p1.getY();
    }
    void getP2(int &x,int &y){
        x=this->p2.getX();
        y=this->p2.getY();
    }
    void draw(){
        line(p1.getX(),p1.getY(),p2.getX(),p2.getY());
    }
};
int main()
{
    initgraph();
    int x , y;
    Point temp;



    cout<<"CIRCLE"<<endl;
    Point p(150,200);
    Circle c1,c2(100,150,50),c3(p,100);
    temp=c2.getCentObj();
    cout<<"center x="<<temp.getX()<<"y="<<temp.getY()<<endl;
    c3.getCenter(x,y);
    cout<<"center x="<<x<<"y="<<y<<endl;

    c3.draw();


    Point rectUl(250,150),rectLr(290,200);
    Rect r1,r2(700,750,800,850),r3(rectUl,rectLr);
    temp=r2.getUlObj();

    r3.draw();



    return 0;
}
