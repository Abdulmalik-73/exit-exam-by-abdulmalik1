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
    options: ["&lt;link&gt;", "&lt;href&gt;", "&lt;a&gt;", "&lt;url&gt;"],
    answer: 2,
    explanation: "The &lt;a&gt; (anchor) tag is used to create hyperlinks in HTML. The 'href' attribute specifies the URL destination. Example: &lt;a href='https://example.com'&gt;Click here&lt;/a&gt;"
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
    explanation: "Both 'Typecasting' and 'Casting conversion' refer to the same process of converting a value from one data type to another (e.g., converting an integer to a string, or a float to an integer). These terms are used interchangeably in programming."
  },
  {
    id: 25, course: "Internet Programming", theme: "Theme 1",
    level: "Application",
    text: "Which JavaScript method displays a dialog box with a message and only an OK button?",
    options: ["confirm()", "prompt()", "alert()", "dialog()"],
    answer: 2,
    explanation: "The alert() method displays a simple dialog box with a message and an OK button. confirm() shows OK and Cancel buttons, prompt() allows user input, and dialog() is not a standard JavaScript method."
  },
  {
    id: 26, course: "Internet Programming", theme: "Theme 1",
    level: "Analysis",
    text: "Which HTTP status code indicates that a requested web page was NOT found on the server?",
    options: ["200", "301", "403", "404"],
    answer: 3,
    explanation: "HTTP status code 404 means 'Not Found' - the server cannot find the requested resource. 200 means 'OK' (success), 301 means 'Moved Permanently' (redirect), and 403 means 'Forbidden' (access denied)."
  },

  // ─── THEME 2: Computer Networking and Information Security ────────────────
  // Course 4: Data Communication and Computer Networks (8 questions)
  {
    id: 27, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Remember",
    text: "Which network device operates at Layer 3 of the OSI model and routes packets between different networks?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 2,
    explanation: "A Router operates at Layer 3 (Network Layer) of the OSI model and makes routing decisions based on IP addresses to forward packets between different networks. Hubs operate at Layer 1, Switches at Layer 2, and Bridges at Layer 2."
  },
  {
    id: 28, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Remember",
    text: "What is the standard port number used by the HTTP protocol?",
    options: ["21", "25", "80", "443"],
    answer: 2,
    explanation: "HTTP (Hypertext Transfer Protocol) uses port 80 by default. Port 21 is for FTP, port 25 is for SMTP (email), and port 443 is for HTTPS (secure HTTP)."
  },
  {
    id: 29, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "Which protocol is responsible for automatically assigning IP addresses to devices joining a network?",
    options: ["DNS", "DHCP", "ARP", "SMTP"],
    answer: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to devices on a network. DNS translates domain names to IPs, ARP maps IP to MAC addresses, and SMTP is for email."
  },
  {
    id: 30, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "Which OSI model layer is responsible for end-to-end delivery, error correction, and flow control?",
    options: ["Network layer (Layer 3)", "Data Link layer (Layer 2)", "Transport layer (Layer 4)", "Session layer (Layer 5)"],
    answer: 2,
    explanation: "The Transport Layer (Layer 4) provides end-to-end communication, error detection and correction, flow control, and segmentation. TCP and UDP operate at this layer. Layer 3 handles routing, Layer 2 handles frame delivery, and Layer 5 manages sessions."
  },
  {
    id: 31, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Application",
    text: "A network administrator subnets 192.168.1.0 using a /26 prefix. How many USABLE host addresses are available per subnet?",
    options: ["30", "62", "126", "254"],
    answer: 1,
    explanation: "A /26 subnet mask provides 2^6 = 64 total addresses per subnet. Subtracting 2 (network address and broadcast address) gives 62 usable host addresses. The formula is 2^(32-26) - 2 = 64 - 2 = 62."
  },
  {
    id: 32, course: "Data Communication & Networks", theme: "Theme 2",
    level: "Understanding",
    text: "In which data transmission mode can data flow in BOTH directions simultaneously?",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
    answer: 2,
    explanation: "Full-duplex allows simultaneous bidirectional data transmission (both directions at the same time), like a telephone conversation. Simplex is one-way only, half-duplex is bidirectional but only one direction at a time (like walkie-talkies)."
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
    explanation: "Private IP address ranges defined by RFC 1918 are: 10.0.0.0 to 10.255.255.255 (Class A), 172.16.0.0 to 172.31.255.255 (Class B), and 192.168.0.0 to 192.168.255.255 (Class C). These addresses are not routable on the public internet."
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
    explanation: "DNS (Domain Name System) translates human-readable domain names (like www.google.com) into IP addresses (like 142.250.185.46) that computers use to identify each other on the network. It acts as the internet's phone book."
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
    explanation: "The CIA triad represents the three core principles of information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy and preventing unauthorized modification), and Availability (ensuring authorized users can access data when needed)."
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
    explanation: "A Denial of Service (DoS) attack floods a target system with excessive traffic or requests, consuming resources and making the system unavailable to legitimate users. DDoS (Distributed DoS) uses multiple sources to amplify the attack."
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
    explanation: "Symmetric encryption uses a single shared key for both encryption and decryption (like AES, DES). Asymmetric encryption uses a key pair: a public key for encryption and a private key for decryption (like RSA). Asymmetric is slower but more secure for key exchange."
  },
  {
    id: 38, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "Which type of social engineering attack involves sending fraudulent emails that appear to be from a legitimate organization in order to steal user credentials?",
    options: ["Baiting", "Tailgating", "Phishing", "Pretexting"],
    answer: 2,
    explanation: "Phishing is a social engineering attack where attackers send fraudulent emails or messages that appear to be from trusted sources (banks, companies) to trick victims into revealing sensitive information like passwords or credit card numbers."
  },
  {
    id: 39, course: "Information System Security", theme: "Theme 2",
    level: "Application",
    text: "A user receives an email claiming to be from their bank, asking them to click a link and enter their login credentials. This is an example of:",
    options: ["Malware attack", "SQL Injection", "Phishing", "Denial of Service attack"],
    answer: 2,
    explanation: "This is a classic phishing attack. The attacker impersonates a trusted entity (the bank) to trick the user into revealing sensitive credentials. Users should never click links in unsolicited emails and should always verify by contacting the organization directly."
  },
  {
    id: 40, course: "Information System Security", theme: "Theme 2",
    level: "Analysis",
    text: "Which of the following BEST describes a passive attack on an information system?",
    options: [
      "Modifying data in transit between two communicating parties",
      "Eavesdropping on network traffic to capture sensitive information WITHOUT altering it",
      "Flooding a server with requests to make it unavailable",
      "Injecting malicious code into a web application",
    ],
    answer: 1,
    explanation: "A passive attack involves monitoring or eavesdropping on communications to gather information without modifying the data. Examples include packet sniffing and traffic analysis. Active attacks involve modifying data, injecting code, or disrupting services."
  },
  {
    id: 41, course: "Information System Security", theme: "Theme 2",
    level: "Understanding",
    text: "What is a firewall's primary function in network security?",
    options: [
      "Encrypt all data passing through the network",
      "Monitor and control incoming and outgoing network traffic based on security rules",
      "Detect and remove viruses from files",
      "Backup all network data automatically",
    ],
    answer: 1,
    explanation: "A firewall monitors and controls network traffic based on predetermined security rules, acting as a barrier between trusted internal networks and untrusted external networks. It can block or allow traffic based on IP addresses, ports, and protocols."
  },
  {
    id: 42, course: "Information System Security", theme: "Theme 2",
    level: "Application",
    text: "Which security measure would BEST protect against SQL injection attacks?",
    options: [
      "Using strong passwords",
      "Installing antivirus software",
      "Using parameterized queries (prepared statements)",
      "Encrypting the database",
    ],
    answer: 2,
    explanation: "Parameterized queries (prepared statements) separate SQL code from user input, preventing attackers from injecting malicious SQL commands. This is the most effective defense against SQL injection attacks, which occur when user input is directly concatenated into SQL queries."
  },

  // ─── THEME 3: Database and Information Systems ────────────────────────────
  // Course 6: Database Systems (8 questions)
  {
    id: 43, course: "Database Systems", theme: "Theme 3",
    level: "Remember",
    text: "Which SQL command is used to retrieve data from a database table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: 2,
    explanation: "SELECT is the SQL command used to query and retrieve data from database tables. INSERT adds new records, UPDATE modifies existing records, and DELETE removes records."
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
    explanation: "ACID represents the four key properties that guarantee reliable database transactions: Atomicity (all-or-nothing execution), Consistency (database remains in valid state), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist even after system failure)."
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
    explanation: "Second Normal Form (2NF) eliminates partial dependencies by ensuring that all non-key attributes depend on the entire primary key, not just part of it. This applies when you have a composite primary key. 1NF eliminates repeating groups, 3NF eliminates transitive dependencies."
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
    explanation: "A double rectangle represents a weak entity - an entity that cannot exist independently and depends on a strong entity for its existence. For example, a 'Room' entity might be weak and depend on a 'Building' entity. Strong entities use single rectangles."
  },
  {
    id: 47, course: "Database Systems", theme: "Theme 3",
    level: "Application",
    text: "Which SQL clause is used to filter groups of records based on a condition AFTER the GROUP BY clause is applied?",
    options: ["WHERE", "HAVING", "ORDER BY", "FILTER"],
    answer: 1,
    explanation: "HAVING filters groups after GROUP BY is applied and can use aggregate functions (like COUNT, SUM). WHERE filters individual rows before grouping and cannot use aggregate functions. Example: SELECT dept, COUNT(*) FROM employees GROUP BY dept HAVING COUNT(*) > 5;"
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
    explanation: "This is a 3NF violation due to transitive dependency. InstructorOffice depends on InstructorName, which is not a key. The dependency chain is: (StudentID, CourseID) → InstructorName → InstructorOffice. To fix this, separate instructor information into its own table."
  },
  {
    id: 49, course: "Database Systems", theme: "Theme 3",
    level: "Understanding",
    text: "Which type of SQL JOIN returns ALL records from the LEFT table and the matching records from the right table (NULL if no match)?",
    options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL OUTER JOIN"],
    answer: 2,
    explanation: "LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table and matching records from the right table. If there's no match, NULL values are returned for right table columns. INNER JOIN only returns matching records, RIGHT JOIN returns all from right table."
  },
  {
    id: 50, course: "Database Systems", theme: "Theme 3",
    level: "Analysis",
    text: "Which concurrency problem occurs when a transaction reads data that has been modified but NOT yet committed by another transaction, which may later be rolled back?",
    options: ["Lost update", "Dirty read", "Unrepeatable read", "Phantom read"],
    answer: 1,
    explanation: "A dirty read occurs when a transaction reads uncommitted changes from another transaction. If the other transaction rolls back, the first transaction has read invalid data. Lost update is when concurrent updates overwrite each other, unrepeatable read is when data changes between reads, phantom read is when new rows appear."
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
    explanation: "An inverted index is a data structure that maps each unique term (word) to a list of documents containing that term, along with positions. This enables fast full-text search. For example: 'database' → [doc1, doc5, doc12]. It's called 'inverted' because it inverts the document-to-term relationship."
  },
  {
    id: 52, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Remember",
    text: "Which text pre-processing step removes very common, non-informative words such as 'the', 'is', and 'a' from documents before indexing?",
    options: ["Stemming", "Tokenization", "Stop word removal", "Lemmatization"],
    answer: 2,
    explanation: "Stop word removal eliminates common words (like 'the', 'is', 'a', 'an') that appear frequently but carry little meaning for search. This reduces index size and improves search efficiency. Stemming reduces words to root form, tokenization splits text into words, lemmatization converts to dictionary form."
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
    explanation: "Precision measures the fraction of retrieved documents that are relevant: Precision = (Relevant Retrieved) / (Total Retrieved). It answers 'Of what I retrieved, how much was useful?' High precision means few false positives. Recall measures the fraction of all relevant documents that were retrieved."
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
    explanation: "TF-IDF (Term Frequency-Inverse Document Frequency) weights terms based on how frequently they appear in a document (TF) and how rare they are across all documents (IDF). Terms that appear often in one document but rarely in others get high weights, making them good discriminators for relevance ranking."
  },
  {
    id: 55, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Application",
    text: "An IR system retrieves 8 documents for a query. 6 of those retrieved documents are relevant. There are 10 relevant documents in total. What is the RECALL?",
    options: ["0.75", "0.60", "0.80", "0.50"],
    answer: 1,
    explanation: "Recall = (Relevant Retrieved) / (Total Relevant) = 6 / 10 = 0.60 or 60%. Recall measures what fraction of all relevant documents were found. In this case, the system found 6 out of 10 relevant documents."
  },
  {
    id: 56, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Application",
    text: "Using the same data from the previous question (8 retrieved, 6 relevant among retrieved, 10 total relevant), what is the PRECISION?",
    options: ["0.60", "0.75", "0.80", "0.50"],
    answer: 1,
    explanation: "Precision = (Relevant Retrieved) / (Total Retrieved) = 6 / 8 = 0.75 or 75%. Precision measures what fraction of retrieved documents are relevant. In this case, 6 out of 8 retrieved documents were relevant."
  },
  {
    id: 57, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Analysis",
    text: "A search engine retrieves 100 documents. 40 are relevant. There are 200 relevant documents in the whole collection. What is the F1-score? (Precision=0.40, Recall=0.20)",
    options: ["0.40", "0.20", "0.267", "0.533"],
    answer: 2,
    explanation: "F1-score is the harmonic mean of precision and recall: F1 = 2 × (Precision × Recall) / (Precision + Recall) = 2 × (0.40 × 0.20) / (0.40 + 0.20) = 2 × 0.08 / 0.60 = 0.16 / 0.60 = 0.267. F1-score balances precision and recall into a single metric."
  },
  {
    id: 58, course: "Information Storage & Retrieval", theme: "Theme 3",
    level: "Understanding",
    text: "Which information retrieval model represents both documents and queries as vectors in a multi-dimensional space and uses cosine similarity for ranking?",
    options: ["Boolean model", "Probabilistic model", "Vector Space Model (VSM)", "Relational model"],
    answer: 2,
    explanation: "The Vector Space Model (VSM) represents documents and queries as vectors in a multi-dimensional space where each dimension corresponds to a term. Similarity is measured using cosine similarity between vectors. This allows for ranked retrieval, unlike the Boolean model which only returns exact matches."
  },

  // Course 8: Multimedia Information Systems (8 questions)
  // Course 6: Database Systems (8 questions)

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
    explanation: "A pixel (picture element) is the smallest addressable unit of a digital image. Each pixel represents a single point of color. An image is composed of a grid of pixels, and the total number of pixels determines the image resolution (e.g., 1920×1080 = 2,073,600 pixels)."
  },
  {
    id: 60, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Remember",
    text: "Which image file format uses LOSSY compression and is best suited for storing photographs?",
    options: ["PNG", "GIF", "BMP", "JPEG"],
    answer: 3,
    explanation: "JPEG (Joint Photographic Experts Group) uses lossy compression, which reduces file size by discarding some image data that is less noticeable to the human eye. This makes it ideal for photographs. PNG uses lossless compression, GIF is limited to 256 colors, and BMP is uncompressed."
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
    explanation: "Raster (bitmap) images are composed of a grid of pixels and lose quality (pixelate) when scaled up. Vector images use mathematical equations to define shapes, lines, and curves, allowing them to scale infinitely without quality loss. Logos and illustrations are typically vector; photos are raster."
  },
  {
    id: 62, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Application",
    text: "Calculate the uncompressed file size of a 1920×1080 pixel image with 24-bit color depth.",
    options: ["1.44 MB", "3.0 MB", "5.93 MB", "10.09 MB"],
    answer: 2,
    explanation: "File size = Width × Height × (Bits per pixel / 8) = 1920 × 1080 × (24/8) = 1920 × 1080 × 3 = 6,220,800 bytes = 5.93 MB. The 24-bit color depth means 8 bits each for Red, Green, and Blue channels."
  },
  {
    id: 63, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Understanding",
    text: "In MPEG video compression, which frame type stores a COMPLETE image and does NOT reference any other frames?",
    options: ["P-frame (Predictive frame)", "B-frame (Bidirectional frame)", "I-frame (Intra-coded frame)", "D-frame (Delta frame)"],
    answer: 2,
    explanation: "I-frames (Intra-coded frames) are complete, standalone images that don't reference other frames. They serve as reference points for P-frames (which predict from previous frames) and B-frames (which predict from both previous and future frames). I-frames enable random access and error recovery in video streams."
  },
  {
    id: 64, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Understanding",
    text: "Which color model is used for PRINTING, based on subtractive color mixing (absorbing light)?",
    options: ["RGB", "HSV", "CMYK", "YIQ"],
    answer: 2,
    explanation: "CMYK (Cyan, Magenta, Yellow, Black/Key) is used for printing and uses subtractive color mixing - inks absorb (subtract) certain wavelengths of light. RGB (Red, Green, Blue) is additive and used for screens. HSV is Hue-Saturation-Value, and YIQ is used in television broadcasting."
  },
  {
    id: 65, course: "Multimedia Information Systems", theme: "Theme 3",
    level: "Application",
    text: "What is the uncompressed size of 1 minute of CD-quality stereo audio? (44,100 Hz, 16-bit depth, 2 channels)",
    options: ["5 MB", "10.09 MB", "22 MB", "2.5 MB"],
    answer: 1,
    explanation: "Size = Sample Rate × Bit Depth × Channels × Time / 8 = 44,100 × 16 × 2 × 60 / 8 = 10,584,000 bytes = 10.09 MB. CD-quality audio samples 44,100 times per second, with 16 bits per sample, across 2 channels (stereo)."
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
    explanation: "Huffman encoding is a lossless compression algorithm that assigns variable-length codes based on symbol frequency - frequent symbols get shorter codes, rare symbols get longer codes. This minimizes the average code length. RLE compresses repeated sequences, LZW uses dictionary-based compression, and DCT is used in lossy compression (JPEG)."
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
    explanation: "PEAS stands for Performance measure (how success is evaluated), Environment (the world the agent operates in), Actuators (how the agent acts on the environment), and Sensors (how the agent perceives the environment). This framework helps specify the task environment for an intelligent agent."
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
    explanation: "Model-based reflex agents maintain an internal state that tracks aspects of the world that are not currently visible. This allows them to handle partially observable environments by keeping a model of how the world works and updating it based on sensor input. Simple reflex agents only react to current percepts."
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
    explanation: "BFS explores nodes level by level (breadth-first) using a queue data structure, guaranteeing the shortest path in unweighted graphs. DFS explores as deep as possible along each branch using a stack, which may not find the shortest path. BFS is complete and optimal for unweighted graphs; DFS is not optimal."
  },
  {
    id: 70, course: "Fundamentals of Artificial Intelligence", theme: "Theme 4",
    level: "Application",
    text: "In A* search, if the actual cost from start to node n is g(n)=5 and the estimated cost to the goal is h(n)=8, what is the total evaluation function f(n)?",
    options: ["3", "8", "13", "40"],
    answer: 2,
    explanation: "In A* search, the evaluation function is f(n) = g(n) + h(n), where g(n) is the actual cost from start to node n, and h(n) is the heuristic estimate from n to the goal. Therefore, f(n) = 5 + 8 = 13. A* uses this to prioritize which nodes to explore."
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
    explanation: "A utility-based agent is most appropriate because it can balance multiple conflicting objectives (safety, speed, comfort, compliance) by assigning utility values to different states and choosing actions that maximize expected utility. Simple reflex and model-based agents can't handle trade-offs, and goal-based agents only achieve goals without optimization."
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
    explanation: "The Turing Test evaluates machine intelligence based on its ability to exhibit intelligent behavior indistinguishable from a human. If a human interrogator cannot reliably distinguish the machine from a human through text-based conversation, the machine is considered to have passed the test. It's about behavioral intelligence, not computational power."
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
    explanation: "Knowledge sharing systems help organizations increase customer satisfaction and retention by ensuring that customer-facing employees have access to the collective knowledge and best practices of the organization. This leads to better service, faster problem resolution, and improved customer experiences."
  },
  {
    id: 74, course: "Knowledge Management", theme: "Theme 4",
    level: "Understanding",
    text: "In the SECI model, which mode of knowledge conversion involves converting tacit knowledge into documented, explicit form through articles, diagrams, or manuals?",
    options: ["Socialization", "Externalization", "Combination", "Internalization"],
    answer: 1,
    explanation: "Externalization is the process of converting tacit (personal, experiential) knowledge into explicit (documented, codified) knowledge through articulation in documents, manuals, diagrams, or procedures. Socialization shares tacit-to-tacit, Combination combines explicit-to-explicit, and Internalization converts explicit-to-tacit."
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
    explanation: "Explicit knowledge is formal, codified, and easily documented (books, databases, procedures). Tacit knowledge is personal, context-specific, and difficult to formalize - it includes skills, experiences, insights, and intuition gained through practice. For example, riding a bicycle involves tacit knowledge that's hard to fully explain in words."
  },
  {
    id: 76, course: "Knowledge Management", theme: "Theme 4",
    level: "Application",
    text: "A master carpenter teaches an apprentice by working side by side with them every day, with the apprentice observing and imitating. Which SECI mode does this represent?",
    options: ["Externalization", "Combination", "Socialization", "Internalization"],
    answer: 2,
    explanation: "Socialization is the process of sharing tacit knowledge through direct experience, observation, and practice. The apprentice learns tacit skills (how to hold tools, judge wood quality, sense when something is right) by working alongside the master, not through written instructions. This is tacit-to-tacit knowledge transfer."
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
    explanation: "The 'knowledge is power' mentality is a major barrier where employees hoard knowledge believing it gives them job security or competitive advantage. This prevents knowledge sharing and collaboration. Overcoming this requires organizational culture change, incentives for sharing, and leadership that values collaboration over individual knowledge hoarding."
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
    explanation: "The Modeling phase in CRISP-DM (Cross-Industry Standard Process for Data Mining) involves selecting appropriate modeling techniques (classification, clustering, regression), building models, and tuning parameters. Business Understanding defines objectives, Data Preparation cleans data, and Deployment puts models into production."
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
    explanation: "Supervised learning uses labeled training data where each input has a corresponding correct output (label). The model learns to map inputs to outputs. Examples include classification (spam/not spam) and regression (predicting house prices). Unsupervised learning uses unlabeled data, reinforcement learning learns through rewards/penalties."
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
    explanation: "Overfitting occurs when a model learns the training data too well, including noise and random fluctuations, rather than the underlying patterns. It performs excellently on training data but poorly on new, unseen test data because it has memorized rather than generalized. Solutions include regularization, more training data, and simpler models."
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
    explanation: "K-Fold cross-validation divides data into K subsets (folds). The model is trained K times, each time using K-1 folds for training and 1 fold for testing, rotating which fold is used for testing. This provides a more robust performance estimate by using all data for both training and validation, reducing variance in the evaluation."
  },
  {
    id: 82, course: "Introduction to Machine Learning", theme: "Theme 4",
    level: "Application",
    text: "A classification model is evaluated and gives: TP=90, FP=10, FN=20, TN=80. What is the PRECISION?",
    options: ["0.80", "0.82", "0.90", "0.75"],
    answer: 2,
    explanation: "Precision = TP / (TP + FP) = 90 / (90 + 10) = 90 / 100 = 0.90 or 90%. Precision measures the accuracy of positive predictions - of all instances predicted as positive, what fraction were actually positive. High precision means few false positives."
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
    explanation: "Both solutions combat overfitting: (A) More training data helps the model learn general patterns rather than memorizing, and dropout randomly disables neurons during training to prevent co-adaptation. (B) Simpler models with fewer parameters are less likely to memorize noise. Training for more epochs would actually worsen overfitting."
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
    explanation: "A centroid is the center point of a cluster, calculated as the mean (average) of all data points assigned to that cluster. K-Means iteratively updates centroids by: (1) assigning points to nearest centroid, (2) recalculating centroids as the mean of assigned points, until convergence."
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
    explanation: "ESS (Executive Support System) or EIS (Executive Information System) is designed for senior executives to support strategic, unstructured decision-making. It provides high-level summaries, external data, and drill-down capabilities. TPS handles transactions, MIS provides routine reports for middle management, DSS supports semi-structured decisions."
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
    explanation: "B2B (Business-to-Business) e-commerce involves transactions between businesses, such as manufacturers selling to wholesalers or suppliers selling to retailers. Examples include Alibaba and procurement systems. B2C is business-to-consumer (Amazon), C2C is consumer-to-consumer (eBay), G2C is government-to-citizen."
  },
  {
    id: 87, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "Which information system processes high volumes of day-to-day business transactions such as ATM withdrawals, point-of-sale purchases, and payroll processing?",
    options: ["DSS", "ESS", "TPS", "MIS"],
    answer: 2,
    explanation: "TPS (Transaction Processing System) handles routine, high-volume operational transactions that are essential for running the business. They are characterized by: high volume, repetitive processing, immediate processing, and accuracy requirements. Examples include ATM systems, airline reservations, and payroll systems."
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
    explanation: "An Intranet is a private network accessible only to an organization's employees, using internet technologies. An Extranet extends the intranet to allow controlled access to specific external parties like suppliers, customers, or partners. Both use internet protocols but with restricted access through firewalls and authentication."
  },
  {
    id: 89, course: "Management of IS and Services", theme: "Theme 5",
    level: "Application",
    text: "A company's CEO uses a real-time dashboard that aggregates data from multiple internal departments and external market sources to monitor Key Performance Indicators. Which IS does this best describe?",
    options: ["TPS", "MIS", "DSS", "ESS"],
    answer: 3,
    explanation: "This describes an ESS (Executive Support System). The key indicators are: (1) used by CEO (executive level), (2) real-time dashboard, (3) aggregates data from multiple sources, (4) monitors KPIs for strategic oversight. ESS provides executives with easy access to internal and external information relevant to strategic goals."
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
    explanation: "Cost leadership strategy focuses on becoming the lowest-cost producer in the industry. Using IS to automate processes and optimize supply chains reduces operational costs, allowing the company to offer lower prices or achieve higher margins. Product differentiation focuses on unique features, focus strategy targets specific market segments."
  },
  {
    id: 91, course: "Management of IS and Services", theme: "Theme 5",
    level: "Understanding",
    text: "In Herbert Simon's model of organizational decision making, which phase involves identifying and DEFINING the problem that requires a decision?",
    options: ["Design phase", "Intelligence phase", "Choice phase", "Implementation phase"],
    answer: 1,
    explanation: "Simon's decision-making model has four phases: (1) Intelligence - identifying and defining the problem, (2) Design - developing alternative solutions, (3) Choice - selecting the best alternative, (4) Implementation - executing the chosen solution. Intelligence is about problem recognition and understanding."
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
    explanation: "IS outsourcing involves contracting external service providers to handle some or all IT functions (development, maintenance, support, infrastructure). Organizations outsource to reduce costs, access specialized expertise, focus on core business, or improve service quality. Examples include cloud services, application development, and help desk support."
  },
  {
    id: 93, course: "Management of IS and Services", theme: "Theme 5",
    level: "Evaluation",
    text: "A bank branch manager needs weekly summaries of loan approval rates, branch transaction volumes, and staff performance. Which IS would be MOST appropriate?",
    options: ["TPS", "MIS", "ESS", "OAS (Office Automation System)"],
    answer: 1,
    explanation: "MIS (Management Information System) is most appropriate for middle managers who need routine, periodic reports summarizing operational data. MIS provides structured reports (weekly, monthly) from TPS data to support tactical decision-making. ESS is for executives, TPS handles transactions, OAS supports office tasks like email and documents."
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
    explanation: "PERT (Program Evaluation and Review Technique) uses a weighted average: TE = (Optimistic + 4×Most Likely + Pessimistic) / 6. The Most Likely time is weighted 4 times more heavily because it's the most probable outcome. This formula accounts for uncertainty in activity duration estimates."
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
    explanation: "The Project Charter is the document that formally authorizes a project, names the project manager, and grants authority to use organizational resources. It includes project objectives, high-level requirements, stakeholders, and success criteria. It's issued by the project sponsor or senior management."
  },
  {
    id: 96, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "In Tuckman's model of team development, during which stage do conflicts emerge, power struggles occur, and team members challenge each other and the leader?",
    options: ["Forming", "Storming", "Norming", "Performing"],
    answer: 1,
    explanation: "Tuckman's stages are: (1) Forming - team members meet and learn about the project, (2) Storming - conflicts and power struggles emerge as members assert themselves, (3) Norming - team establishes norms and cohesion, (4) Performing - team works efficiently toward goals. Storming is the conflict stage."
  },
  {
    id: 97, course: "IS Project Management", theme: "Theme 5",
    level: "Application",
    text: "A software development activity has: Optimistic time = 4 days, Most Likely = 7 days, Pessimistic = 16 days. What is the PERT expected duration?",
    options: ["7 days", "7.67 days", "8 days", "9 days"],
    answer: 2,
    explanation: "Using PERT formula: TE = (O + 4M + P) / 6 = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 days. The weighted average gives more importance to the most likely estimate while accounting for optimistic and pessimistic scenarios."
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
    explanation: "Scope creep is the uncontrolled expansion of project scope through continuous addition of features or requirements without proper change control, budget increases, or timeline extensions. It's a major cause of project failure. Prevention requires formal change management processes and stakeholder agreement on scope changes."
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
    explanation: "Cost Variance (CV) = Earned Value (EV) - Actual Cost (AC) = 80,000 - 100,000 = -20,000 Birr. A negative CV means the project is over budget - you've spent more (100,000) than the value of work completed (80,000). Positive CV means under budget, CV=0 means on budget."
  },
  {
    id: 100, course: "IS Project Management", theme: "Theme 5",
    level: "Analysis",
    text: "A project has tasks: A(3 days) → B(5 days) → D(4 days) is one path, and A(3 days) → C(2 days) → D(4 days) is another. D depends on BOTH B and C. What is the critical path duration?",
    options: ["7 days", "9 days", "12 days", "14 days"],
    answer: 2,
    explanation: "Path 1: A→B→D = 3+5+4 = 12 days. Path 2: A→C→D = 3+2+4 = 9 days. The critical path is the longest path, which is 12 days (A→B→D). D cannot start until BOTH B and C are complete, so the project duration is determined by the longer path."
  },
  {
    id: 101, course: "IS Project Management", theme: "Theme 5",
    level: "Understanding",
    text: "Which risk response strategy involves CHANGING the project plan to completely ELIMINATE a threat?",
    options: ["Transfer", "Mitigate", "Accept", "Avoid"],
    answer: 3,
    explanation: "Avoid strategy eliminates the risk by changing the project plan (e.g., using proven technology instead of new, risky technology). Transfer shifts risk to a third party (insurance, outsourcing). Mitigate reduces probability or impact. Accept acknowledges the risk without action. Avoidance is the only strategy that completely eliminates the threat."
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
    explanation: "WBS (Work Breakdown Structure) hierarchically decomposes the total project scope into smaller, manageable components called work packages. It organizes and defines the total scope, making it easier to estimate, schedule, and assign work. The WBS is the foundation for project planning - it answers 'what' needs to be done, not 'when' (Gantt chart) or 'what risks' exist."
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
    explanation: "Big bang implementation switches the entire organization to the new ERP system at once on a specific date. It's high-risk but fast. Phased rollout implements modules gradually, parallel running operates both systems simultaneously, pilot implementation tests in one location first. Big bang requires extensive preparation and has no fallback."
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
    explanation: "ERP stands for Enterprise Resource Planning. It's an integrated software system that manages and coordinates all business processes and data across an organization (finance, HR, manufacturing, supply chain, sales) using a single, shared database. This eliminates data silos and provides real-time information flow."
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
    explanation: "The silo problem occurs when departments use separate, incompatible systems that don't communicate. This leads to data inconsistency, duplication, delays, and lack of real-time visibility. ERP solves this by integrating all departments into one system with a shared database, enabling real-time data flow and consistency across the organization."
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
    explanation: "Lack of top management commitment and poor change management are the leading causes of ERP failure. ERP requires significant organizational change - new processes, roles, and ways of working. Without executive support, adequate training, and managing resistance to change, even technically sound implementations fail. Technical issues are usually manageable if organizational factors are addressed."
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
    explanation: "Phased rollout (or phased implementation) deploys the ERP system gradually, one module or department at a time. This reduces risk, allows learning from each phase, and spreads the workload. Big bang switches everything at once, parallel runs both systems simultaneously, pilot tests in one location before full rollout."
  },
  {
    id: 108, course: "Enterprise Systems", theme: "Theme 5",
    level: "Analysis",
    text: "Which ERP vendor is recognized as the WORLD'S LARGEST ERP provider by revenue, offering the SAP S/4HANA product?",
    options: ["Oracle", "Microsoft", "SAP", "Odoo"],
    answer: 2,
    explanation: "SAP is the world's largest ERP vendor by revenue, with its flagship product SAP S/4HANA. SAP dominates the enterprise market, especially for large corporations. Oracle and Microsoft are also major players. Odoo is an open-source ERP popular with small-to-medium businesses."
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
    explanation: "MRP (Material Requirements Planning) calculates material requirements for production. Based on the master production schedule, bill of materials, and inventory levels, MRP determines what materials to order, how much, and when, ensuring materials arrive just in time for production while minimizing inventory costs."
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
    explanation: "Odoo is the most appropriate choice. It's open-source (free community edition), affordable, has a large community for support, and is suitable for small-to-medium businesses. SAP, Oracle, and Microsoft are enterprise-grade solutions with high licensing costs, implementation expenses, and complexity that may be excessive for a medium-sized company with limited budget."
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
    explanation: "Sequence diagrams show object interactions over time, with objects arranged horizontally and time flowing vertically downward. Messages (method calls) are shown as arrows between objects. They're used to model specific scenarios and understand the flow of control. Class diagrams show structure, use case diagrams show functionality, activity diagrams show workflows."
  },
  {
    id: 112, course: "System Analysis & Design", theme: "Theme 5",
    level: "Remember",
    text: "Which SDLC methodology is characterized by short, iterative development cycles called 'sprints,' high user involvement, and adapting to changing requirements?",
    options: ["Waterfall", "Spiral", "Agile (Scrum)", "V-Model"],
    answer: 2,
    explanation: "Agile (specifically Scrum) uses short iterations (sprints, typically 2-4 weeks), continuous user feedback, and embraces changing requirements. Waterfall is sequential with fixed requirements, Spiral combines iterative development with risk analysis, V-Model emphasizes testing at each development stage. Agile prioritizes working software and customer collaboration."
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
    explanation: "<<include>> means one use case always and mandatorily includes the behavior of another use case. For example, 'Process Order' might <<include>> 'Validate Payment' - you can't process an order without validating payment. <<extend>> is optional and conditional. <<include>> promotes reuse of common functionality."
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
    explanation: "Functional requirements specify WHAT the system does - features, functions, and behaviors (e.g., 'system shall allow users to login'). Non-functional requirements specify HOW WELL it performs - quality attributes like performance, security, usability, reliability (e.g., 'system shall respond within 2 seconds'). Both are critical and testable."
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
    explanation: "A Fork node (thick bar with one input, multiple outputs) splits the flow into concurrent parallel paths that execute simultaneously. For example, after placing an order, the system might fork to: (1) process payment, (2) update inventory, (3) send confirmation email - all happening in parallel. A Join node (multiple inputs, one output) synchronizes parallel flows."
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
    explanation: "A Merge node (diamond with multiple inputs, one output) combines multiple conditional branches back into a single flow. It's the opposite of a Decision node (one input, multiple outputs based on conditions). Merge doesn't evaluate conditions - it simply reunites paths that were previously split by a decision."
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
    explanation: "This demonstrates LOW COHESION - the module performs multiple unrelated functions (login, database, PDF, email). Good design requires high cohesion (module does one thing well) and low coupling (minimal dependencies). This module should be split into separate, focused classes: AuthenticationService, DatabaseService, ReportGenerator, EmailService."
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
    explanation: "The Spiral model is risk-driven and iterative. Each spiral loop has four phases: (1) Determine objectives, (2) Identify and resolve risks, (3) Development and testing, (4) Plan next iteration. Risk analysis is performed in every cycle before proceeding. It's ideal for large, complex, high-risk projects. Waterfall is sequential, Agile focuses on flexibility, Prototype focuses on user feedback."
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
    explanation: "This is a NON-FUNCTIONAL REQUIREMENT specifically related to performance/scalability. It doesn't describe WHAT the system does (functional), but HOW WELL it performs under load. Non-functional requirements specify quality attributes: performance, security, usability, reliability, scalability. They're measurable and testable (5,000 concurrent users is a specific, testable criterion)."
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
    explanation: "The Spiral model is most appropriate because: (1) It's risk-driven with dedicated risk analysis in each cycle - critical for high-risk banking projects, (2) It's iterative, allowing requirements to be refined over time, (3) It emphasizes documentation and planning needed for regulatory compliance. Waterfall is too rigid for unclear requirements, Agile may lack sufficient documentation for compliance, Prototype is too informal for banking."
  },
];

// Total: 120 Questions across 5 Themes
console.log('Loaded ' + questions.length + ' questions');
