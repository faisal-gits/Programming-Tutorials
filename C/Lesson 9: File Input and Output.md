## Lesson 9: File Input and Output

### Overview

In this lesson, you'll explore file input and output (I/O) in C programming. File I/O allows your programs to interact with external files, enabling data persistence and communication with the outside world.

### Topics Covered

- Reading from and writing to files in C.
- Using file streams and handling errors.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the importance of file input and output in programming.
2. Read data from files using file streams.
3. Write data to files using file streams.
4. Handle errors and exceptions related to file I/O.

### File Input and Output

#### Introduction to File Streams

A file stream is a connection between your program and an external file. It allows your program to read from or write to the file.

#### Reading from Files

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("data.txt", "r");  // Open file for reading
    if (file != NULL) {
        int num;
        fscanf(file, "%d", &num);  // Read data from file
        printf("Number read from file: %d\n", num);
        fclose(file);  // Close the file
    }
    return 0;
}
```

#### Writing to Files

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("output.txt", "w");  // Open file for writing
    if (file != NULL) {
        fprintf(file, "Hello, World!\n");  // Write data to file
        fclose(file);  // Close the file
    }
    return 0;
}
```

#### Handling Errors

When working with files, it's important to handle errors that might occur during file I/O operations.

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("data.txt", "r");
    if (file == NULL) {
        printf("Error opening file.\n");
        return 1;
    }

    // Read data and perform operations

    fclose(file);
    return 0;
}
```

### Conclusion

In this lesson, you've explored file input and output in C programming. File I/O is essential for interacting with external files, allowing your programs to read and write data. You've learned how to use file streams, read and write data to files, and handle errors that might occur during file operations. This knowledge enables your programs to persist data and communicate with the external world. In the next lesson, you'll delve into preprocessor directives and macros, which provide powerful code manipulation capabilities.