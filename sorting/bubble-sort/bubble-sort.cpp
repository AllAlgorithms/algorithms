#include <iostream>

using namespace std;

void bubble_sort(int array[], int l){
    for(int i=0;i<l;i++){
        for(int j=i;j<l;j++){
            if(array[i] > array[j]){
                int aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }   
    }
}

int main(){
    return 0;
}