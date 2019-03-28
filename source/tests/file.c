// Comment

#include <stdio.h>

int main (void)
{
    int a = 0x89;
    int b = 089;
    int c = 89.;
    int d = 'a';
    printf ("Hello %s!\n", "world");
    return 0;
}




/*! \file structcmd.h
    \brief A Documented file.
    
    Details.
*/
/*! \def MAX(a,b)
    \brief A macro that returns the maximum of \a a and \a b.
   
    Details.
*/
/*! \var typedef unsigned int UINT32
    \brief A type definition for a .
    
    Details.
*/
/*! \var int errno
    \brief Contains the last error code.
    \warning Not thread safe!
*/
/*! \fn int open(const char *pathname,int flags)
    \brief Opens a file descriptor.
    \param pathname The name of the descriptor.
    \param flags Opening flags.
*/
/*! \fn int close(int fd)
    \brief Closes the file descriptor \a fd.
    \param fd The descriptor to close.
*/
/*! \fn size_t write(int fd,const char *buf, size_t count)
    \brief Writes \a count bytes from \a buf to the filedescriptor \a fd.
    \param fd The descriptor to write to.
    \param buf The data buffer to write.
    \param count The number of bytes to write.
*/
/*! \fn int read(int fd,char *buf,size_t count)
    \brief Read bytes from a file descriptor.
    \param fd The descriptor to read from.
    \param buf The buffer to read into.
    \param count The number of bytes to read.
*/
#define MAX(a,b) (((a)>(b))?(a):(b))
typedef unsigned int UINT32;
int errno;
int open(const char *,int);
int close(int);
size_t write(int,const char *, size_t);
int read(int,char *,size_t);