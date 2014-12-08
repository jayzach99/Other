#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<sys/mman.h>
typedef void V;typedef int I;typedef double F;typedef unsigned char C,*S;typedef long L;
#define O           printf
#define R           return
#define I(a...)     if(a)
#define W(a...)     while(a)
 
#define A(a...)     {if(!(a))R 0;}
#define Q(x,s)      {if(x)R O("ERROR: %s\n",s),(S)0;}
 
#define P(x,a...)   {if(x)R a;}
#define N(n,a...)   {I i=0,_i=(n);for(;i<_i;++i){a;}}
#define J(n,a...)   {I j=0,_j=(n);for(;j<_j;++j){a;}}
#define MIN(a,b)    ({typeof(a)_a=(a);typeof(a)_b=(b);_a<_b?_a:_b;})
#define MAX(a,b)    ({typeof(a)_a=(a);typeof(a)_b=(b);_a>_b?_a:_b;})
#define L8          (8==sizeof(L))
__inline S map(L*n,S s){I d=open(s,0);Q(0>d,s)L b[22];R fstat(d,&b),s=mmap(0,*n=b[L8+5],PROT_READ,MAP_PRIVATE,d,0),close(d),s;}
 
// reassemble(5-25hours 70-300lines)  READ(.5hour) k(1hour) c(1hour) 6lines
 
// overlap
I f(S s,S t){I a=strlen(s),b=strlen(t),m=0;P(strstr(s,t),b)N(MIN(a,b),I(!memcmp(s+a-i,t,i))m=i)R m;}
 
// merge
V g(I n,S*b){I m=0,mi=0,mj=1;N(n,J(n,I k=i!=j?f(b[i],b[j]):0;I(m<k)m=k,mi=i,mj=j))  // max(m mi mj)
 S s=b[mi],t=b[mj];b[mi]=strcat(strcpy(malloc(strlen(s)+strlen(t)+1-m),s),t+m),b[mj]=b[n-1],free(s),free(t);}
 
// run
I main(I n,S*x){L m;S b[20000],s=map(&m,x[1]);A(s)
 n=0;N(m-1,I h;I('{'==s[i])h=i+1;I('}'==s[i])b[n++]=strndup(s+h,i-h))
 W(1<n)g(n--,b);O("%s\n",*b),free(*b);}