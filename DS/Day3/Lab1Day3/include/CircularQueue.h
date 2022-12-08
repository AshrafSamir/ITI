#ifndef CIRCULARQUEUE_H
#define CIRCULARQUEUE_H

#include<iostream>

template<class T>
class CircularQueue
{
    T *arr;
    int rear, front, size;

    public:
        CircularQueue(int size)
        {
            rear = front = -1;
            this->size = size;
            arr = new T[size];
        }


        bool enQueue(T data)
        {
            if((rear==(size-1)&&(front == 0)) || (front == rear+1))return 0;
            if(front == -1)front++;
            if(rear == (size-1))rear = 0;
            else
            {
                rear++;
            }
            arr[rear] = data;
            return 1;
        }

        T deQueue()
        {
            T data;
            if((rear!=(size-1)&&(front == 0)) || (front != rear+1))
            {
                data = arr[front];
            }
            if(rear == front)
            {
                rear = -1;
                front = -1;
            }
            else if(front == (size-1))front = 0;
            else
            {
                front++;
            }


            return data;

        }

        void Display()
        {


            int i = front;
            if(i == -1)return;
            while(i != rear)
            {
                //cout<<i<<"::"<<rear;
                cout<<arr[i]<<" ";
                if(i == (size-1))i=0;

                else{
                    i++;
                    if(i == rear)
                    cout<<arr[i]<<" ";
                    }
            }
        }

    protected:


};

#endif // CIRCULARQUEUE_H
