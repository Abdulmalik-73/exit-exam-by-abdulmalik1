// Exit Exam Questions - All 120 Questions
const questions = [
  // ─── THEME 1: Computer Programming & Web Technology ───────────────────────
  // Course 1: Basic Computer Programming (8 questions)
  {
    id: 1, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Remember",
    text: "Which of the following is a valid variable name in C++?",
    options: ["2student", "student_name", "student-name", "student name"],
    answer: 1,
    explanation: "In C++, variable names must start with a letter or underscore, not a number. They can contain letters, digits, and underscores, but cannot contain hyphens or spaces. 'student_name' follows all these rules."
  },
  {
    id: 2, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Remember",
    text: "Which data type is used to store a single character in C++?",
    options: ["string", "char", "int", "bool"],
    answer: 1,
    explanation: "The 'char' data type is specifically designed to store a single character in C++. It occupies 1 byte of memory and can hold any ASCII character."
  },
  {
    id: 3, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is the output of the following C++ code?\n  int x = 10;  x += 5;  cout << x;",
    options: ["10", "5", "15", "50"],
    answer: 2,
    explanation: "The += operator adds the right operand to the left operand and assigns the result to the left operand. So x += 5 is equivalent to x = x + 5, which gives 10 + 5 = 15."
  },
  {
    id: 4, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is the key difference between a while loop and a do-while loop in C++?",
    options: [
      "While loop executes at least once; do-while checks the condition first",
      "Do-while loop executes at least once; while loop checks the condition first",
      "They are exactly the same",
      "Do-while loop cannot have a condition",
    ],
    answer: 1,
    explanation: "A do-while loop executes its body at least once before checking the condition, while a while loop checks the condition first and may never execute if the condition is initially false."
  },
  {
    id: 5, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What does the modulus operator (%) return in C++?",
    options: [
      "The quotient of two numbers",
      "The remainder after integer division",
      "The product of two numbers",
      "The absolute difference of two numbers",
    ],
    answer: 1,
    explanation: "The modulus operator (%) returns the remainder after dividing the first operand by the second. For example, 7 % 3 returns 1 because 7 divided by 3 is 2 with a remainder of 1."
  },
  {
    id: 6, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Application",
    text: "Which of the following correctly declares and initializes an array of 5 integers in C++?",
    options: [
      "int arr[5] = {1, 2, 3, 4, 5};",
      "array int[5] = {1, 2, 3, 4, 5};",
      "int arr = {1, 2, 3, 4, 5};",
      "int[5] arr = {1, 2, 3, 4, 5};",
    ],
    answer: 0,
    explanation: "The correct syntax for declaring and initializing an array in C++ is: datatype arrayName[size] = {values}. So 'int arr[5] = {1, 2, 3, 4, 5};' is the proper way."
  },
  {
    id: 7, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Analysis",
    text: "What is the output of the following C++ code?\n  int a = 5, b = 3;  cout << a % b;",
    options: ["1", "2", "1.67", "5"],
    answer: 1,
    explanation: "The modulus operator returns the remainder of integer division. 5 divided by 3 equals 1 with a remainder of 2, so a % b outputs 2."
  },
  {
    id: 8, course: "Basic Computer Programming", theme: "Theme 1",
    level: "Understanding",
    text: "Which file I/O mode flag in C++ adds content to the end of an existing file without deleting existing data?",
    options: ["ios::out", "ios::in", "ios::app", "ios::trunc"],
    answer: 2,
    explanation: "The ios::app (append) mode opens a file for output and moves the write position to the end of the file, preserving existing content. ios::trunc would delete existing content, while ios::out overwrites from the beginning."
  },

  // Course 2: Object Oriented Programming (10 questions)
  {
    id: 9, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Remember",
    text: "Which OOP concept allows a class to inherit properties and methods from another class?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    answer: 2,
    explanation: "Inheritance is the OOP concept that allows a class (child/derived class) to inherit properties and methods from another class (parent/base class), promoting code reusability."
  },
  {
    id: 10, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Remember",
    text: "What keyword is used in Java to call the constructor of the parent class from a subclass constructor?",
    options: ["this()", "parent()", "super()", "base()"],
    answer: 2,
    explanation: "The super() keyword in Java is used to call the constructor of the parent class from a subclass constructor. It must be the first statement in the subclass constructor."
  },
  {
    id: 11, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Understanding",
    text: "Which of the following is TRUE about inheritance?",
    options: [
      "Superclass constructors are not inherited by subclasses.",
      "A has-a relationship is implemented via inheritance.",
      "When a subclass redefines a superclass method using the same signature, the subclass is said to overload that superclass method.",
      "None of the above.",
    ],
    answer: 0,
    explanation: "Superclass constructors are NOT inherited by subclasses in Java. Subclasses must explicitly call the superclass constructor using super(). A 'has-a' relationship is implemented through composition, not inheritance, and redefining a method with the same signature is called overriding, not overloading."
  },
  {
    id: 12, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is method overloading in OOP?",
    options: [
      "When a subclass provides a new implementation of a method defined in its parent class",
      "When the same method name exists with different parameter lists in the same class",
      "When a class inherits from multiple classes",
      "When a method is declared without a body in an abstract class",
    ],
    answer: 1,
    explanation: "Method overloading occurs when multiple methods in the same class have the same name but different parameter lists (different number, type, or order of parameters). This is compile-time polymorphism."
  },
  {
    id: 13, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Application",
    text: "Which access modifier makes a class member accessible ONLY within the class itself?",
    options: ["public", "protected", "private", "default"],
    answer: 2,
    explanation: "The 'private' access modifier restricts access to class members only within the class itself. Public allows access from anywhere, protected allows access within the package and subclasses, and default allows access within the package."
  },
  {
    id: 14, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is the primary difference between an abstract class and an interface in Java?",
    options: [
      "An abstract class can have both concrete and abstract methods; an interface (before Java 8) can only have abstract methods.",
      "An interface can have instance variables; abstract classes cannot.",
      "A class can extend multiple abstract classes.",
      "Abstract classes are used exclusively for multiple inheritance.",
    ],
    answer: 0,
    explanation: "Abstract classes can contain both abstract methods (without implementation) and concrete methods (with implementation), while traditional interfaces (before Java 8) could only have abstract methods. Abstract classes can also have instance variables and constructors."
  },
  {
    id: 15, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Application",
    text: "Which of the following is correct about a constructor in Java?",
    options: [
      "A constructor must have a return type.",
      "A constructor name must be different from the class name.",
      "A constructor is automatically called when an object is created with the 'new' keyword.",
      "A constructor cannot take parameters.",
    ],
    answer: 2,
    explanation: "A constructor is automatically invoked when an object is instantiated using the 'new' keyword. Constructors have no return type (not even void), must have the same name as the class, and can accept parameters (parameterized constructors)."
  },
  {
    id: 16, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Analysis",
    text: "What will be the output of the following Java code?\n  class Animal { void sound() { System.out.println(\"Animal\"); } }\n  class Dog extends Animal { void sound() { System.out.println(\"Dog\"); } }\n  Animal a = new Dog();  a.sound();",
    options: ["Animal", "Dog", "Compile error", "Runtime error"],
    answer: 1,
    explanation: "This demonstrates runtime polymorphism (method overriding). Although the reference type is Animal, the actual object is Dog. Java uses dynamic method dispatch, so the overridden method in Dog class is called, printing 'Dog'."
  },
  {
    id: 17, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is encapsulation in OOP?",
    options: [
      "The ability of a class to inherit from multiple parent classes",
      "Hiding internal data and providing controlled access to it through public methods",
      "The ability of one interface to inherit from another interface",
      "Creating objects directly from abstract classes",
    ],
    answer: 1,
    explanation: "Encapsulation is the OOP principle of bundling data (variables) and methods that operate on that data within a single unit (class), while hiding the internal implementation details and providing controlled access through public methods (getters/setters)."
  },
  {
    id: 18, course: "Object Oriented Programming", theme: "Theme 1",
    level: "Analysis",
    text: "Which of the following is NOT a valid example of method overloading?",
    options: [
      "add(int a, int b) and add(double a, double b)",
      "add(int a, int b) and add(int b, int a)",
      "add(int a) and add(int a, int b)",
      "add(int a, int b) and add(double a, int b)",
    ],
    answer: 1,
    explanation: "Method overloading requires different parameter lists. add(int a, int b) and add(int b, int a) have the same parameter types in the same order, just with different parameter names. Parameter names alone don't distinguish overloaded methods - only the number, type, and order of parameters matter."
  },

  // Course 3: Internet Programming (8 questions)
  {
    id: 19, course: "Internet Programming", theme: "Theme 1",
    level: "Remember",
    text: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "High Transfer Machine Language",
    ],
    answer: 0,
    explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language used to create and structure content on the web, defining elements like headings, paragraphs, links, and images."
  },
  {
    id: 20, course: "Internet Programming", theme: "Theme 1",
    level: "Remember",
    text: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: 2,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML. The 'href' attribute specifies the URL destination. Example: <a href='https://example.com'>Click here</a>"
  },
  {
    id: 21, course: "Internet Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is the key difference between the GET and POST methods in HTML forms?",
    options: [
      "GET sends data in the request body; POST sends data in the URL.",
      "POST sends data in the request body; GET appends data to the URL.",
      "They are identical in function.",
      "GET is more secure than POST.",
    ],
    answer: 1,
    explanation: "GET appends form data to the URL as query parameters (visible in the address bar), making it suitable for non-sensitive data. POST sends data in the HTTP request body (not visible in URL), making it more secure and suitable for sensitive information like passwords."
  },
  {
    id: 22, course: "Internet Programming", theme: "Theme 1",
    level: "Understanding",
    text: "What is the difference between a session and a cookie in PHP?",
    options: [
      "Sessions are stored on the client; cookies are stored on the server.",
      "Sessions are stored on the server; cookies are stored on the client browser.",
      "Both sessions and cookies are stored on the server.",
      "Both sessions and cookies are stored on the client.",
    ],
    answer: 1,
    explanation: "Sessions store data on the server side and use a session ID (stored in a cookie or URL) to identify users. Cookies store data directly on the client's browser. Sessions are more secure for sensitive data since the actual data never leaves the server."
  },
  {
    id: 23, course: "Internet Programming", theme: "Theme 1",
    level: "Application",
    text: "Which CSS property is used to change the text color of an HTML element?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: 2,
    explanation: "The 'color' property in CSS is used to set the text color of an element. Example: color: red; or color: #FF0000; or color: rgb(255, 0, 0);. The 'background-color' property sets the background color, not text color."
  },
  {
    id: 24, course: "Internet Programming", theme: "Theme 1",
    level: "Understanding",
    text: "The process that converts a value of one data type to another data type is referred to as:",
    options: ["Moving", "Typecasting", "Casting conversion", "B and C are answers"],
    answer: 3,
  },
  {
    id: 25, course: "Internet Programming", theme: "Theme 1",
    level: "Application",
    text: "Which JavaScript method displays a dialog box with a message and only an OK button?",
    options: ["confirm()", "prompt()", "alert()", "dialog()"],
    answer: 2,
  },
  {
    id: 26, course: "Internet Programming", theme: "Theme 1",
    level: "Analysis",
    text: "Which HTTP status code indicates that a requested web page was NOT found on the server?",
    options: ["200", "301", "403", "404"],
    answer: 3,
  },

  // ─── THEME 2: Computer Networking and Information Security ────────────────
  // Course 4: Data Communication and Computer Networks (8 questions)
  {
    id: 27, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Remember",
    text: "Which network device operates at Layer 3 of the OSI model and routes packets between different networks?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 2,
  },
  {
    id: 28, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Remember",
    text: "What is the standard port number used by the HTTP protocol?",
    options: ["21", "25", "80", "443"],
    answer: 2,
  },
  {
    id: 29, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "Which protocol is responsible for automatically assigning IP addresses to devices joining a network?",
    options: ["DNS", "DHCP", "ARP", "SMTP"],
    answer: 1,
  },
  {
    id: 30, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "Which OSI model layer is responsible for end-to-end delivery, error correction, and flow control?",
    options: ["Network layer (Layer 3)", "Data Link layer (Layer 2)", "Transport layer (Layer 4)", "Session layer (Layer 5)"],
    answer: 2,
  },
  {
    id: 31, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Application",
    text: "A network administrator subnets 192.168.1.0 using a /26 prefix. How many USABLE host addresses are available per subnet?",
    options: ["30", "62", "126", "254"],
    answer: 1,
  },
  {
    id: 32, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "In which data transmission mode can data flow in BOTH directions simultaneously?",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
    answer: 2,
  },
  {
    id: 33, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Analysis",
    text: "Which of the following correctly identifies a private IP address range?",
    options: [
      "172.32.0.0 – 172.63.255.255",
      "192.168.0.0 – 192.168.255.255 only",
      "10.0.0.0 – 10.255.255.255 AND 192.168.0.0 – 192.168.255.255",
      "128.0.0.0 – 191.255.255.255",
    ],
    answer: 2,
  },
  {
    id: 34, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "What is the primary function of the DNS protocol in a network?",
    options: [
      "Assign IP addresses dynamically to devices",
      "Translate human-readable domain names to IP addresses",
      "Transfer files securely between computers",
      "Encrypt data for secure transmission",
    ],
    answer: 1,
  },

  // Course 5: Information System Security (8 questions)
  {
    id: 35, course: "Information System Security", theme: "Theme 2",
    level: "Remember",
    text: "What does the CIA triad stand for in information security?",
    options: [
      "Central Intelligence Agency",
      "Confidentiality, Integrity, Availability",
      "Cyber Information Authentication",
      "Computer Internet Access",
    ],
    answer: 1,
  },
  {
    id: 36, course: "Information System Security", theme: "Theme 2",
    level: "Remember",
    text: "Which type of attack involves overwhelming a target system with massive traffic to make it unavailable to legitimate users?",
    options: [
      "Man-in-the-Middle attack",
      "SQL Injection attack",
      "Denial of Service (DoS) attack",
      "Phishing attack",
    ],
    answer: 2,
  },
  {
    id: 37, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "What is the fundamental difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric encryption uses two different keys; asymmetric uses one key.",
      "Symmetric encryption uses the SAME key for encryption and decryption; asymmetric encryption uses a key PAIR (public and private).",
      "Symmetric encryption is always slower than asymmetric encryption.",
      "Asymmetric encryption cannot be used for digital signatures.",
    ],
    answer: 1,
  },
  {
    id: 38, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "Which type of social engineering attack involves sending fraudulent emails that appear to be from a legitimate organization in order to steal user credentials?",
    options: ["Baiting", "Tailgating", "Phishing", "Pretexting"],
    answer: 2,
  },
  {
    id: 39, course: "Information System Security", theme: "Theme 2",
    level: "Application",
    text: "A user receives an email claiming to be from their bank, asking them to click a link and enter their login credentials. This is an example of:",
    options: ["Malware attack", "SQL Injection", "Phishing", "Denial of Service attack"],
    answer: 2,
  },
  {
    id: 40, course: "Information System Security", theme: "Theme 2",
    level: "Analysis",
    text: "Which of the following BEST describes a passive attack on an information system?",
    options: [
      "Modifying data in transit between two communicating parties",
      "Flooding a server with requests to make it unavailable",
      "Observing and capturing data without altering it",
      "Injecting malicious SQL code into a database query",
    ],
    answer: 2,
  },
  {
    id: 41, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "What is the primary purpose of hashing in information security?",
    options: [
      "To encrypt data for secure network transmission",
      "To verify data integrity by producing a fixed-size output that changes completely if data is altered",
      "To compress data for faster network transmission",
      "To dynamically assign IP addresses to network devices",
    ],
    answer: 1,
  },
  {
    id: 42, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "To which authentication factor category does a fingerprint scan belong?",
    options: [
      "Something you know",
      "Something you have",
      "Something you are",
      "Something you do",
    ],
    answer: 2,
  },

  // ─── THEME 3: Database and Information Management ─────────────────────────
  // Course 6: Database Systems (8 questions)
  {
    id: 43, course: "Database Systems", theme: "Theme 3",
    level: "Remember",
    text: "Which SQL command is used to retrieve data from a database table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: 2,
  },
  {
    id: 44, course: "Database Systems", theme: "Theme 3",
    level: "Remember",
    text: "What does ACID stand for in database transaction management?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Authentication, Consistency, Integration, Durability",
      "Atomicity, Concurrency, Isolation, Data",
      "Authentication, Concurrency, Integrity, Distribution",
    ],
    answer: 0,
  },
  {
    id: 45, course: "Database Systems", theme: "Theme 3",
    level: "Understanding",
    text: "Which normal form eliminates partial dependencies — where a non-key attribute depends on only PART of a composite primary key?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)",
    ],
    answer: 1,
  },
  {
    id: 46, course: "Database Systems", theme: "Theme 3",
    level: "Understanding",
    text: "In an Entity-Relationship (ER) diagram, what does a double rectangle represent?",
    options: [
      "Strong entity",
      "Weak entity",
      "Derived attribute",
      "Multi-valued attribute",
    ],
    answer: 1,
  },
  {
    id: 47, course: "Database Systems", theme: "Theme 3",
    level: "Application",
    text: "Which SQL clause is used to filter groups of records based on a condition AFTER the GROUP BY clause is applied?",
    options: ["WHERE", "HAVING", "ORDER BY", "FILTER"],
    answer: 1,
  },
  {
    id: 48, course: "Database Systems", theme: "Theme 3",
    level: "Analysis",
    text: "A table contains StudentID, CourseID, StudentName, InstructorName, and InstructorOffice. The FDs are: StudentID→StudentName and InstructorName→InstructorOffice. What normalization violation does this represent?",
    options: [
      "1NF violation — multi-valued cells present",
      "2NF violation — partial dependency exists",
      "3NF violation — transitive dependency exists",
      "BCNF violation only",
    ],
    answer: 2,
  },
  {
    id: 49, course: "Database Systems", theme: "Theme 3",
    level: "Understanding",
    text: "Which type of SQL JOIN returns ALL records from the LEFT table and the matching records from the right table (NULL if no match)?",
    options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL OUTER JOIN"],
    answer: 2,
  },
  {
    id: 50, course: "Database Systems", theme: "Theme 3",
    level: "Analysis",
    text: "Which concurrency problem occurs when a transaction reads data that has been modified but NOT yet committed by another transaction, which may later be rolled back?",
    options: ["Lost update", "Dirty read", "Unrepeatable read", "Phantom read"],
    answer: 1,
  },

  // Course 7: Information Storage and Retrieval (8 questions)
  {
    id: 51, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Remember",
    text: "What is an inverted index in an information retrieval system?",
    options: [
      "A list of documents stored in reverse chronological order",
      "A data structure that maps each unique term to the list of documents containing it",
      "An index that stores documents in descending order of relevance",
      "A compressed version of the document collection",
    ],
    answer: 1,
  },
  {
    id: 52, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Remember",
    text: "Which text pre-processing step removes very common, non-informative words such as 'the', 'is', and 'a' from documents before indexing?",
    options: ["Stemming", "Tokenization", "Stop word removal", "Lemmatization"],
    answer: 2,
  },
  {
    id: 53, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Understanding",
    text: "What does PRECISION measure in an information retrieval evaluation?",
    options: [
      "The fraction of ALL relevant documents that were retrieved",
      "The fraction of RETRIEVED documents that are actually relevant",
      "The total number of documents in the entire collection",
      "The speed of the retrieval system in seconds",
    ],
    answer: 1,
  },
  {
    id: 54, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Understanding",
    text: "What is the purpose of TF-IDF weighting in information retrieval?",
    options: [
      "To compress document files for storage efficiency",
      "To measure the importance of a term in a specific document relative to its frequency across the whole collection",
      "To remove duplicate documents from the index",
      "To translate natural language queries into SQL",
    ],
    answer: 1,
  },
  {
    id: 55, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Application",
    text: "An IR system retrieves 8 documents for a query. 6 of those retrieved documents are relevant. There are 10 relevant documents in total. What is the RECALL?",
    options: ["0.75", "0.60", "0.80", "0.50"],
    answer: 1,
  },
  {
    id: 56, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Application",
    text: "Using the same data from the previous question (8 retrieved, 6 relevant among retrieved, 10 total relevant), what is the PRECISION?",
    options: ["0.60", "0.75", "0.80", "0.50"],
    answer: 1,
  },
  {
    id: 57, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Analysis",
    text: "A search engine retrieves 100 documents. 40 are relevant. There are 200 relevant documents in the whole collection. What is the F1-score? (Precision=0.40, Recall=0.20)",
    options: ["0.40", "0.20", "0.267", "0.533"],
    answer: 2,
  },
  {
    id: 58, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Understanding",
    text: "Which information retrieval model represents both documents and queries as vectors in a multi-dimensional space and uses cosine similarity for ranking?",
    options: ["Boolean model", "Probabilistic model", "Vector Space Model (VSM)", "Relational model"],
    answer: 2,
  },

  // Course 8: Multimedia Information Systems (8 questions)
  {
    id: 59, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Remember",
    text: "What does the term 'pixel' refer to in digital images?",
    options: [
      "The resolution of an image in dots per inch",
      "The smallest individual unit (picture element) of a digital image",
      "The total file size of an image in bytes",
      "The color depth (bits per color) of an image",
    ],
    answer: 1,
  },
  {
    id: 60, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Remember",
    text: "Which image file format uses LOSSY compression and is best suited for storing photographs?",
    options: ["PNG", "GIF", "BMP", "JPEG"],
    answer: 3,
  },
  {
    id: 61, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Understanding",
    text: "What is the fundamental difference between raster (bitmap) and vector images?",
    options: [
      "Raster images are made of mathematical shapes; vector images are made of pixels.",
      "Raster images are made of pixels and lose quality when scaled; vector images use mathematical shapes and scale without quality loss.",
      "Both raster and vector images pixelate when scaled up.",
      "Vector images are always larger in file size than equivalent raster images.",
    ],
    answer: 1,
  },
  {
    id: 62, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Application",
    text: "Calculate the uncompressed file size of a 1920×1080 pixel image with 24-bit color depth.",
    options: ["1.44 MB", "3.0 MB", "5.93 MB", "10.09 MB"],
    answer: 2,
  },
  {
    id: 63, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Understanding",
    text: "In MPEG video compression, which frame type stores a COMPLETE image and does NOT reference any other frames?",
    options: ["P-frame (Predictive frame)", "B-frame (Bidirectional frame)", "I-frame (Intra-coded frame)", "D-frame (Delta frame)"],
    answer: 2,
  },
  {
    id: 64, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Understanding",
    text: "Which color model is used for PRINTING, based on subtractive color mixing (absorbing light)?",
    options: ["RGB", "HSV", "CMYK", "YIQ"],
    answer: 2,
  },
  {
    id: 65, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Application",
    text: "What is the uncompressed size of 1 minute of CD-quality stereo audio? (44,100 Hz, 16-bit depth, 2 channels)",
    options: ["5 MB", "10.09 MB", "22 MB", "2.5 MB"],
    answer: 1,
  },
  {
    id: 66, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Analysis",
    text: "Which lossless compression algorithm assigns shorter binary codes to more frequently occurring symbols and longer codes to rarer symbols?",
    options: [
      "Run-Length Encoding (RLE)",
      "LZW (Lempel-Ziv-Welch) compression",
      "Huffman encoding",
      "Discrete Cosine Transform (DCT)",
    ],
    answer: 2,
  },

  // ─── THEME 4: Intelligent Systems ────────────────────────────────────────
  // Course 9: Fundamentals of AI (6 questions)
  {
    id: 67, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Remember",
    text: "What does the acronym PEAS stand for when describing an intelligent agent?",
    options: [
      "Performance, Environment, Actuators, Sensors",
      "Planning, Evaluation, Action, Sequence",
      "Performance, Execution, Algorithm, Sensors",
      "Program, Environment, Automation, System",
    ],
    answer: 0,
  },
  {
    id: 68, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Understanding",
    text: "Which type of intelligent agent maintains an internal state (model) of the world to handle partially observable environments?",
    options: [
      "Simple reflex agent",
      "Model-based reflex agent",
      "Goal-based agent",
      "Utility-based agent",
    ],
    answer: 1,
  },
  {
    id: 69, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Understanding",
    text: "What is the key difference between Breadth-First Search (BFS) and Depth-First Search (DFS)?",
    options: [
      "BFS explores level by level using a QUEUE and guarantees shortest path; DFS goes as deep as possible using a STACK.",
      "DFS explores level by level; BFS goes deep first.",
      "BFS is not complete; DFS is always complete and optimal.",
      "DFS is optimal for finding shortest paths; BFS is not.",
    ],
    answer: 0,
  },
  {
    id: 70, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Application",
    text: "In A* search, if the actual cost from start to node n is g(n)=5 and the estimated cost to the goal is h(n)=8, what is the total evaluation function f(n)?",
    options: ["3", "8", "13", "40"],
    answer: 2,
  },
  {
    id: 71, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Analysis",
    text: "Which type of agent would be MOST appropriate for a self-driving car that must balance safety, speed, passenger comfort, and legal compliance?",
    options: [
      "Simple reflex agent",
      "Model-based reflex agent",
      "Goal-based agent",
      "Utility-based agent",
    ],
    answer: 3,
  },
  {
    id: 72, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Understanding",
    text: "According to the Turing Test proposed by Alan Turing in 1950, a machine is considered intelligent if:",
    options: [
      "It can solve complex mathematical problems faster than humans.",
      "It can fool a human interrogator into believing it is human through a text conversation.",
      "It can navigate complex physical environments autonomously.",
      "It can process more data per second than the human brain.",
    ],
    answer: 1,
  },

  // Course 10: Knowledge Management (6 questions)
  {
    id: 73, course: "Knowledge Management", theme: "Theme 4",
    level: "Understanding",
    text: "One of the following is a good reason for the need for applying knowledge sharing systems in organizations:",
    options: [
      "To minimize profit or revenue",
      "To increase customer gratification or retention",
      "To unhurried time to market with product",
      "A and C are answers",
    ],
    answer: 1,
  },
  {
    id: 74, course: "Knowledge Management", theme: "Theme 4",
    level: "Understanding",
    text: "In the SECI model, which mode of knowledge conversion involves converting tacit knowledge into documented, explicit form through articles, diagrams, or manuals?",
    options: ["Socialization", "Externalization", "Combination", "Internalization"],
    answer: 1,
  },
  {
    id: 75, course: "Knowledge Management", theme: "Theme 4",
    level: "Understanding",
    text: "What is the main difference between tacit and explicit knowledge?",
    options: [
      "Tacit knowledge is documented and easy to share; explicit knowledge is personal and hard to express.",
      "Explicit knowledge is documented and easy to share; tacit knowledge is personal, experiential, and difficult to articulate.",
      "Both tacit and explicit knowledge are equally easy to transfer between individuals.",
      "Tacit knowledge cannot exist in organizational settings.",
    ],
    answer: 1,
  },
  {
    id: 76, course: "Knowledge Management", theme: "Theme 4",
    level: "Application",
    text: "A master carpenter teaches an apprentice by working side by side with them every day, with the apprentice observing and imitating. Which SECI mode does this represent?",
    options: ["Externalization", "Combination", "Socialization", "Internalization"],
    answer: 2,
  },
  {
    id: 77, course: "Knowledge Management", theme: "Theme 4",
    level: "Analysis",
    text: "Which of the following is a common BARRIER to effective knowledge management in organizations?",
    options: [
      "High employee motivation to share knowledge",
      "Strong organizational culture of open collaboration",
      "A 'knowledge is power' attitude where employees fear sharing reduces their competitive advantage",
      "Excellent IT infrastructure and knowledge management tools",
    ],
    answer: 2,
  },
  {
    id: 78, course: "Knowledge Management", theme: "Theme 4",
    level: "Understanding",
    text: "According to the CRISP-DM process model for data mining, which phase involves selecting and applying appropriate data mining algorithms to the prepared data?",
    options: [
      "Business Understanding",
      "Data Preparation",
      "Modeling",
      "Deployment",
    ],
    answer: 2,
  },

  // Course 11: Machine Learning (6 questions)
  {
    id: 79, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Remember",
    text: "Which type of machine learning trains a model using labeled data where both inputs and their correct outputs are provided?",
    options: [
      "Unsupervised learning",
      "Reinforcement learning",
      "Supervised learning",
      "Self-supervised learning",
    ],
    answer: 2,
  },
  {
    id: 80, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Understanding",
    text: "What is OVERFITTING in machine learning?",
    options: [
      "When a model is too simple to capture underlying patterns in the training data",
      "When a model performs poorly on both the training set and the test set",
      "When a model memorizes training data including noise, performing poorly on new, unseen data",
      "When a model is trained using an insufficient amount of data",
    ],
    answer: 2,
  },
  {
    id: 81, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Understanding",
    text: "What is the purpose of K-Fold cross-validation in machine learning?",
    options: [
      "To speed up model training by reducing the dataset size",
      "To obtain a more reliable performance estimate by using all data for both training and testing across K iterations",
      "To reduce the number of features in the dataset",
      "To artificially increase the training data size through augmentation",
    ],
    answer: 1,
  },
  {
    id: 82, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Application",
    text: "A classification model is evaluated and gives: TP=90, FP=10, FN=20, TN=80. What is the PRECISION?",
    options: ["0.80", "0.82", "0.90", "0.75"],
    answer: 2,
  },
  {
    id: 83, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Analysis",
    text: "Which of the following are valid solutions to overfitting in a machine learning model?",
    options: [
      "Adding more training data and applying dropout regularization",
      "Using a simpler model architecture with fewer parameters",
      "Both A and B are correct",
      "Training the model for significantly more epochs",
    ],
    answer: 2,
  },
  {
    id: 84, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Understanding",
    text: "In the K-Means clustering algorithm, what is a CENTROID?",
    options: [
      "The boundary line that separates two clusters",
      "The mean (average) position of all data points currently assigned to a cluster",
      "The data point that is furthest from the center of its cluster",
      "A support vector that defines the margin between clusters",
    ],
    answer: 1,
  },

  // ─── THEME 5: IS Development and Management ───────────────────────────────
  // Course 12: Management of IS and Services (9 questions)
  {
    id: 85, course: "Management of IS and Services", theme: "Theme 5",
    level: "Remember",
    text: "Which information system is specifically designed to support senior executives in making strategic and largely unstructured decisions?",
    options: [
      "TPS (Transaction Processing System)",
      "MIS (Management Information System)",
      "DSS (Decision Support System)",
      "ESS (Executive Support System)",
    ],
    answer: 3,
  },
  {
    id: 86, course: "Management of IS and Services", theme: "Theme 5",
    level: "Remember",
    text: "Which e-commerce model describes commercial transactions conducted between two businesses?",
    options: [
      "B2C (Business-to-Consumer)",
      "B2B (Business-to-Business)",
      "C2C (Consumer-to-Consumer)",
      "G2C (Government-to-Citizen)",
    ],
    answer: 1,
  },
  {
    id: 87, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "Which information system processes high volumes of day-to-day business transactions such as ATM withdrawals, point-of-sale purchases, and payroll processing?",
    options: ["DSS", "ESS", "TPS", "MIS"],
    answer: 2,
  },
  {
    id: 88, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "What is the primary difference between an Intranet and an Extranet?",
    options: [
      "An Intranet is accessible by the general public; an Extranet is strictly private.",
      "An Intranet is accessible by internal employees only; an Extranet extends limited access to trusted external partners such as suppliers.",
      "An Extranet is always more secure than an Intranet.",
      "An Intranet uses the internet; an Extranet does not use any internet infrastructure.",
    ],
    answer: 1,
  },
  {
    id: 89, course: "Management of IS and Services", theme: "Theme 5",
    level: "Application",
    text: "A company's CEO uses a real-time dashboard that aggregates data from multiple internal departments and external market sources to monitor Key Performance Indicators. Which IS does this best describe?",
    options: ["TPS", "MIS", "DSS", "ESS"],
    answer: 3,
  },
  {
    id: 90, course: "Management of IS and Services", theme: "Theme 5",
    level: "Analysis",
    text: "A manufacturing company uses IS to automate repetitive production processes and optimize its supply chain to reduce unit costs below competitors. Which competitive strategy is this?",
    options: [
      "Product differentiation strategy",
      "Cost leadership strategy",
      "Market focus/niche strategy",
      "Product innovation strategy",
    ],
    answer: 1,
  },
  {
    id: 91, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "In Herbert Simon's model of organizational decision making, which phase involves identifying and DEFINING the problem that requires a decision?",
    options: ["Design phase", "Intelligence phase", "Choice phase", "Implementation phase"],
    answer: 1,
  },
  {
    id: 92, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "What does IS outsourcing mean for an organization?",
    options: [
      "The organization develops and maintains all IS capabilities entirely in-house.",
      "The organization contracts external firms to handle some or all of its IS functions.",
      "The organization permanently eliminates all information systems functions.",
      "The organization merges with a technology company to share IS infrastructure.",
    ],
    answer: 1,
  },
  {
    id: 93, course: "Management of IS and Services", theme: "Theme 5",
    level: "Evaluation",
    text: "A bank branch manager needs weekly summaries of loan approval rates, branch transaction volumes, and staff performance. Which IS would be MOST appropriate?",
    options: ["TPS", "MIS", "ESS", "OAS (Office Automation System)"],
    answer: 1,
  },

  // Course 13: IS Project Management (9 questions)
  {
    id: 94, course: "IS Project Management", theme: "Theme 5",
    level: "Remember",
    text: "What is the correct formula for calculating the Expected Duration (TE) of an activity using PERT?",
    options: [
      "TE = (O + M + P) / 3",
      "TE = (O + 4M + P) / 6",
      "TE = (O + 2M + P) / 4",
      "TE = (O + 3M + P) / 5",
    ],
    answer: 1,
  },
  {
    id: 95, course: "IS Project Management", theme: "Theme 5",
    level: "Remember",
    text: "Which project management document formally AUTHORIZES a project to begin and officially names the project manager?",
    options: [
      "Project Proposal",
      "Statement of Work (SOW)",
      "Project Charter",
      "Work Breakdown Structure (WBS)",
    ],
    answer: 2,
  },
  {
    id: 96, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "In Tuckman's model of team development, during which stage do conflicts emerge, power struggles occur, and team members challenge each other and the leader?",
    options: ["Forming", "Storming", "Norming", "Performing"],
    answer: 1,
  },
  {
    id: 97, course: "IS Project Management", theme: "Theme 5",
    level: "Application",
    text: "A software development activity has: Optimistic time = 4 days, Most Likely = 7 days, Pessimistic = 16 days. What is the PERT expected duration?",
    options: ["7 days", "7.67 days", "8 days", "9 days"],
    answer: 2,
  },
  {
    id: 98, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "What is SCOPE CREEP in project management?",
    options: [
      "The planned reduction of project scope due to budget cuts",
      "The uncontrolled expansion of project scope without corresponding adjustments to time, cost, or resources",
      "The formal change management process for approving new project features",
      "The process of formally reducing scope to meet deadline constraints",
    ],
    answer: 1,
  },
  {
    id: 99, course: "IS Project Management", theme: "Theme 5",
    level: "Application",
    text: "In Earned Value Management (EVM), if EV = 80,000 Birr and AC = 100,000 Birr, what is the Cost Variance (CV) and what does it mean?",
    options: [
      "CV = +180,000 Birr (project is ahead of schedule)",
      "CV = +20,000 Birr (project is under budget)",
      "CV = -20,000 Birr (project is OVER budget)",
      "CV = 80,000 Birr (project is on track)",
    ],
    answer: 2,
  },
  {
    id: 100, course: "IS Project Management", theme: "Theme 5",
    level: "Analysis",
    text: "A project has tasks: A(3 days) → B(5 days) → D(4 days) is one path, and A(3 days) → C(2 days) → D(4 days) is another. D depends on BOTH B and C. What is the critical path duration?",
    options: ["7 days", "9 days", "12 days", "14 days"],
    answer: 2,
  },
  {
    id: 101, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "Which risk response strategy involves CHANGING the project plan to completely ELIMINATE a threat?",
    options: ["Transfer", "Mitigate", "Accept", "Avoid"],
    answer: 3,
  },
  {
    id: 102, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "What is the primary purpose of a Work Breakdown Structure (WBS) in project planning?",
    options: [
      "To display the sequence of project activities on a Gantt chart timeline",
      "To hierarchically decompose the total project scope into smaller, manageable work packages",
      "To identify and rank all project risks by probability and impact",
      "To document the communication plan for all project stakeholders",
    ],
    answer: 1,
  },

  // Course 14: Enterprise Systems (8 questions)
  {
    id: 103, course: "Enterprise Systems", theme: "Theme 5",
    level: "Remember",
    text: "Which ERP implementation strategy involves switching the ENTIRE organization from the old system to the new ERP system on a single, predetermined date?",
    options: [
      "Phased rollout",
      "Parallel running",
      "Big bang",
      "Pilot implementation",
    ],
    answer: 2,
  },
  {
    id: 104, course: "Enterprise Systems", theme: "Theme 5",
    level: "Remember",
    text: "What does the acronym ERP stand for?",
    options: [
      "Enterprise Resource Planning",
      "Electronic Record Processing",
      "Enterprise Reporting Platform",
      "Electronic Resource Programming",
    ],
    answer: 0,
  },
  {
    id: 105, course: "Enterprise Systems", theme: "Theme 5",
    level: "Understanding",
    text: "What is the 'silo problem' that ERP systems are designed to solve in organizations?",
    options: [
      "Data stored in centralized cloud servers that is difficult to access",
      "Isolated departments using separate, incompatible systems that do not share data in real-time",
      "Excessive data redundancy caused by cloud storage duplication",
      "Security vulnerabilities in enterprise network infrastructure",
    ],
    answer: 1,
  },
  {
    id: 106, course: "Enterprise Systems", theme: "Theme 5",
    level: "Understanding",
    text: "Which of the following is the MOST frequently cited reason for ERP implementation failure in organizations?",
    options: [
      "Software bugs inherent in the ERP product itself",
      "Lack of top management commitment and poor organizational change management",
      "Excessive volume of data to migrate from legacy systems",
      "Using the big bang go-live strategy instead of phased rollout",
    ],
    answer: 1,
  },
  {
    id: 107, course: "Enterprise Systems", theme: "Theme 5",
    level: "Application",
    text: "A company implements its new ERP system by going live first in the Finance department, then HR, then Sales — one department at a time over six months. Which implementation strategy is this?",
    options: [
      "Big bang strategy",
      "Parallel running strategy",
      "Phased rollout strategy",
      "Pilot implementation strategy",
    ],
    answer: 2,
  },
  {
    id: 108, course: "Enterprise Systems", theme: "Theme 5",
    level: "Analysis",
    text: "Which ERP vendor is recognized as the WORLD'S LARGEST ERP provider by revenue, offering the SAP S/4HANA product?",
    options: ["Oracle", "Microsoft", "SAP", "Odoo"],
    answer: 2,
  },
  {
    id: 109, course: "Enterprise Systems", theme: "Theme 5",
    level: "Understanding",
    text: "What is the primary purpose of MRP (Material Requirements Planning) within an ERP system?",
    options: [
      "To manage human resources, recruitment, and payroll processing",
      "To calculate what raw materials are needed, in what quantities, and when, based on the production schedule",
      "To process customer orders and manage the sales pipeline",
      "To handle all financial reporting, accounting, and budgeting",
    ],
    answer: 1,
  },
  {
    id: 110, course: "Enterprise Systems", theme: "Theme 5",
    level: "Evaluation",
    text: "A medium-sized Ethiopian company with a limited IT budget needs an affordable ERP solution with a community-supported, open-source option. Which vendor would be MOST appropriate?",
    options: [
      "SAP S/4HANA",
      "Oracle Fusion Cloud ERP",
      "Microsoft Dynamics 365",
      "Odoo",
    ],
    answer: 3,
  },

  // Course 15: System Analysis and Design (10 questions)
  {
    id: 111, course: "System Analysis & Design", theme: "Theme 5",
    level: "Remember",
    text: "Which UML diagram shows the interactions between objects over time through the exchange of messages, arranged vertically?",
    options: [
      "Class diagram",
      "Use case diagram",
      "Sequence diagram",
      "Activity diagram",
    ],
    answer: 2,
  },
  {
    id: 112, course: "System Analysis & Design", theme: "Theme 5",
    level: "Remember",
    text: "Which SDLC methodology is characterized by short, iterative development cycles called 'sprints,' high user involvement, and adapting to changing requirements?",
    options: ["Waterfall", "Spiral", "Agile (Scrum)", "V-Model"],
    answer: 2,
  },
  {
    id: 113, course: "System Analysis & Design", theme: "Theme 5",
    level: "Understanding",
    text: "In a UML use case diagram, what does the <<include>> relationship between two use cases indicate?",
    options: [
      "One use case OPTIONALLY extends another only under certain conditions.",
      "One use case ALWAYS and MANDATORILY includes the behavior of the other use case.",
      "One actor inherits the roles and capabilities of another actor.",
      "A use case can be extended or replaced in future system versions.",
    ],
    answer: 1,
  },
  {
    id: 114, course: "System Analysis & Design", theme: "Theme 5",
    level: "Understanding",
    text: "What is the fundamental difference between functional and non-functional requirements?",
    options: [
      "Functional requirements describe how well the system performs; non-functional requirements describe what the system does.",
      "Functional requirements describe WHAT the system will do (features/functions); non-functional requirements describe HOW WELL it performs (quality attributes like speed, security).",
      "Both types describe system behavior in exactly the same way.",
      "Non-functional requirements are optional and are typically not formally tested.",
    ],
    answer: 1,
  },
  {
    id: 115, course: "System Analysis & Design", theme: "Theme 5",
    level: "Application",
    text: "In a UML activity diagram, a thick horizontal or vertical bar with ONE incoming arrow and MULTIPLE outgoing arrows represents:",
    options: [
      "A Decision node (conditional branching)",
      "A Merge node (joining conditional branches)",
      "A Fork node (initiating concurrent parallel flows)",
      "A Join node (synchronizing and ending parallel flows)",
    ],
    answer: 2,
  },
  {
    id: 116, course: "System Analysis & Design", theme: "Theme 5",
    level: "Application",
    text: "In a UML activity diagram, a diamond shape with MULTIPLE incoming arrows and ONE outgoing arrow represents:",
    options: [
      "A Decision node",
      "A Merge node",
      "A Fork node",
      "A Join node",
    ],
    answer: 1,
  },
  {
    id: 117, course: "System Analysis & Design", theme: "Theme 5",
    level: "Analysis",
    text: "A software module handles user login, database query processing, PDF report generation, and email notification all within a single class. This is an example of:",
    options: [
      "High cohesion and low coupling — a well-designed module",
      "Low cohesion and high coupling — a poorly designed module",
      "Low cohesion only — the module does too many unrelated things",
      "High coupling only — the module has too many dependencies",
    ],
    answer: 2,
  },
  {
    id: 118, course: "System Analysis & Design", theme: "Theme 5",
    level: "Understanding",
    text: "Which SDLC methodology is specifically characterized by a RISK-DRIVEN, iterative approach where each spiral loop includes a dedicated risk analysis phase before engineering begins?",
    options: [
      "Waterfall model",
      "Agile model",
      "Spiral model",
      "Prototype model",
    ],
    answer: 2,
  },
  {
    id: 119, course: "System Analysis & Design", theme: "Theme 5",
    level: "Analysis",
    text: "A university IS development project has this requirement: 'The system must support 5,000 concurrent users without any performance degradation.' This is an example of:",
    options: [
      "A functional requirement — it specifies a system feature",
      "A non-functional requirement (performance) — it specifies a quality attribute",
      "A user story — it describes user behavior",
      "A system constraint — it is an external limitation",
    ],
    answer: 1,
  },
  {
    id: 120, course: "System Analysis & Design", theme: "Theme 5",
    level: "Evaluation",
    text: "For a large, HIGH-RISK banking software project with initially unclear requirements and strict regulatory compliance needs, which SDLC methodology would be MOST appropriate?",
    options: [
      "Waterfall model — clear sequential phases with documentation",
      "Spiral model — risk-driven and iterative with risk analysis each cycle",
      "Agile (Scrum) model — fast sprints with frequent releases",
      "Prototype model — build quickly and refine",
    ],
    answer: 1,
  },
];

// Total: 120 Questions across 5 Themes
console.log('Loaded ' + questions.length + ' questions');
