// gtk-source-lang: Go
/* comment! */
var s string := "A string\n"
import ("fmt")
func main() { fmt.Printf(s); }
type my_struct struct { I int; o string }
package foo
bar( a int32, b string )(c float32 ){ c = 1.3 + float32(a - int32(len(b)) }






package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/sourcegraph/syntaxhighlight"
)

func main() {
	flag.Parse()

	log.SetFlags(0)

	if flag.NArg() != 1 {
		log.Fatal("Must specify exactly 1 filename argument.")
	}

	input, err := ioutil.ReadFile(flag.Arg(0))
	if err != nil {
		log.Fatal(err)
	}

	html, err := syntaxhighlight.AsHTML(input)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s", html)
}

main()





package app

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"github.com/julienschmidt/httprouter"
	"github.com/rewardStyle/rs-identity-service/pkg/domain"
	"github.com/rewardStyle/rs-identity-service/pkg/models"
)

var allowedTypes = map[string]bool{
	"brand": true,
}

var allowedStatuses = map[string]bool{
	"pending":  true,
	"approved": true,
	"declined": true,
}

var allowedStates = map[string]bool{
	"active":  true,
	"deleted": true,
}

// Defining the Port for the App to Domain connection
type AccountHandler interface {
	ListAccounts(response http.ResponseWriter, request *http.Request, params httprouter.Params)
	GetAccountByID(response http.ResponseWriter, request *http.Request, params httprouter.Params)
	CreateAccount(response http.ResponseWriter, request *http.Request, params httprouter.Params)
}

// Defining the Adapter that ties the port to the domain logic.
type accountHandler struct {
	accountService domain.AccountService
}

func NewAccountHandler(accountService domain.AccountService) AccountHandler {
	return &accountHandler{
		accountService,
	}
}

func (a *accountHandler) ListAccounts(response http.ResponseWriter, request *http.Request, params httprouter.Params) {

	// Retrieving context
	ctx := request.Context()

	// Do stuff at the domain level using the adapter.
	a.accountService.GetAllAccounts(ctx)
}

func (a *accountHandler) GetAccountByID(response http.ResponseWriter, request *http.Request, params httprouter.Params) {

	// Retrieving context
	ctx := request.Context()

	// Grabbing parameter id by name
	id := params.ByName("id")

	// Pass in parameter into domain layer
	account, err := a.accountService.GetAccountByID(ctx, id)

	// temp statement, just to remove go unused error
	fmt.Println(account)

	if err != nil {
		fmt.Println("Uh oh, error encountered!")
	}
	// Temp statements
	fmt.Println("Getting account by id ...\n")
	fmt.Println("ID: " + id)

}

func (a *accountHandler) CreateAccount(response http.ResponseWriter, request *http.Request, params httprouter.Params) {
	// Setting Content-Type
	response.Header().Set("Content-Type", "application/json")

	errors := Errors{}

	// Retrieving context
	ctx := request.Context()

	// Creating new input model
	input := models.NewCreateAccountInput()

	decoder := json.NewDecoder(request.Body)
	err := decoder.Decode(&input)

	if err != nil {
		errors.Messages = append(errors.Messages, "Unable to decode request body.")
	}

	// Ensure all corresponding input fields are lowercased
	input.Type = strings.ToLower(input.Type)
	input.State = strings.ToLower(input.State)
	input.Status = strings.ToLower(input.Status)

	/////////////////////////////
	// Value error checking
	/////////////////////////////

	// Checking required fields

	if input.Type == "" {
		errors.Messages = append(errors.Messages, "type is required.")
	}

	if input.Name == "" {
		errors.Messages = append(errors.Messages, "name is required.")
	}

	if allowedTypes[input.Type] != true {
		errors.Messages = append(errors.Messages, "Only the following types are allowed: "+strings.Join(GetKeysFromMap(allowedTypes), ", "))
	}

	if allowedStates[input.State] != true {
		errors.Messages = append(errors.Messages, "Only the following states are allowed: "+strings.Join(GetKeysFromMap(allowedStates), ", "))
	}

	if allowedStatuses[input.Status] != true {
		errors.Messages = append(errors.Messages, "Only the following statuses are allowed: "+strings.Join(GetKeysFromMap(allowedStatuses), ", "))
	}

	if err != nil {
		fmt.Println(err)

		errors.Messages = append(errors.Messages, "Error receiving output struct!"+err.Error())
	}

	// Initiate error response if any errors were caught during this function.
	if len(errors.Messages) > 0 {
		errors.StatusCode = 400
		response.WriteHeader(errors.StatusCode)

		jsonErrors, err := json.Marshal(errors)
		if err != nil {
			fmt.Println(err)
			return
		}

		response.Write(jsonErrors)

		return

	}

	// Pass input struct into domain expecting output struct
	output, err := a.accountService.CreateAccount(ctx, &input)

	wrapper := ResponseWrapper{
		Data: output,
	}

	jsonBody, err := json.Marshal(wrapper)

	// Setting 201 created status
	response.WriteHeader(http.StatusCreated)
	response.Write(jsonBody)
}



package main

import "fmt"

func main() {
   /* local variable definition */
   var a int = 100
   var b int = 200
   var ret int

   /* calling a function to get max value */
   ret = max(a, b)

   fmt.Printf( "Max value is : %d\n", ret )
}

/* function returning the max between two numbers */
func max(num1, num2 int) int {
   /* local variable declaration */
   var result int

   if (num1 > num2) {
      result = num1
   } else {
      result = num2
   }
   return result 
}

avg(6.56, 13.44)

func (s *PostgresStore) CreateAccountTable(ctx context.Context) error {
	query := `
	CREATE TABLE IF NOT EXISTS account (
		id             SERIAL PRIMARY KEY,
		first_name     VARCHAR(255) NOT NULL,
		last_name      VARCHAR(255) NOT NULL,
		account_number BIGINT UNIQUE NOT NULL,
		balance        DECIMAL(18, 2) NOT NULL DEFAULT 0.00,
		created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	);`
	_, err := s.db.ExecContext(ctx, query)
	if err != nil {
		return err
	}
	return nil
}

package main

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"log"
	"time"

	_ "github.com/lib/pq" // PostgreSQL driver
)

// Employee represents the structure of an employee record
// Using sql.Null* types for fields that can be NULL in the database
type Employee struct {
	EmployeeID    int64
	FirstName     string
	LastName      string
	Email         sql.NullString // Handles NULL emails
	PhoneNumber   sql.NullString // Handles NULL phone numbers
	HireDate      time.Time
	JobTitle      sql.NullString // Handles NULL job titles
	Salary        sql.NullFloat64 // Handles NULL salaries
	ManagerID     sql.NullInt64 // Handles NULL manager IDs (FK)
	DepartmentID  sql.NullInt64 // Handles NULL department IDs (FK)
	IsActive      bool
	ProfileNotes  sql.NullString
	BonusPercentage sql.NullFloat64
	// ProfilePicture BLOB might be []byte, sql.NullBytes etc.
}

// DBTX is an interface defining methods common to *sql.DB and *sql.Tx
// This allows functions to work with either a database connection pool or a transaction.
type DBTX interface {
	QueryRowContext(ctx context.Context, query string, args ...interface{}) *sql.Row
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	// Add other methods like QueryContext if needed by other functions
}

// PostgresStore holds the database connection pool
type PostgresStore struct {
	db *sql.DB
}

// NewPostgresStore creates a new store with a database connection
func NewPostgresStore(connectionString string) (*PostgresStore, error) {
	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		return nil, fmt.Errorf("failed to open database connection: %w", err)
	}

	// Verify connection is working
	if err := db.Ping(); err != nil {
		db.Close() // Close connection if ping fails
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	// Configure connection pool settings (optional but recommended)
	db.SetMaxOpenConns(25)
	db.SetMaxIdleConns(10)
	db.SetConnMaxLifetime(5 * time.Minute)

	log.Println("Database connection established successfully.")
	return &PostgresStore{db: db}, nil
}

// Close closes the underlying database connection pool
func (s *PostgresStore) Close() error {
	if s.db != nil {
		return s.db.Close()
	}
	return nil
}

// --- Robust Function Example ---

// GetEmployeeByID retrieves a single employee record by their ID.
// It uses the DBTX interface, making it usable with *sql.DB or *sql.Tx.
func (s *PostgresStore) GetEmployeeByID(ctx context.Context, db DBTX, id int64) (*Employee, error) {
	// 1. Define the parameterized SQL query
	//    Using $1, $2... placeholders for PostgreSQL. Use ? for MySQL/SQLite.
	query := `
		SELECT
			employee_id, first_name, last_name, email, phone_number, hire_date,
			job_title, salary, manager_id, department_id, is_active,
			profile_notes, bonus_percentage
		FROM
			employees
		WHERE
			employee_id = $1;`

	// 2. Execute the query using QueryRowContext
	//    QueryRowContext is preferred for fetching exactly one row.
	//    It takes the context, query, and parameters.
	row := db.QueryRowContext(ctx, query, id)

	// 3. Prepare a variable to scan the result into
	var emp Employee

	// 4. Scan the row into the Employee struct fields
	//    Use pointers to the struct fields. Match the order of columns in SELECT.
	//    Use the correct sql.Null* types for nullable columns.
	err := row.Scan(
		&emp.EmployeeID,
		&emp.FirstName,
		&emp.LastName,
		&emp.Email,         // Scan into sql.NullString
		&emp.PhoneNumber,   // Scan into sql.NullString
		&emp.HireDate,
		&emp.JobTitle,      // Scan into sql.NullString
		&emp.Salary,        // Scan into sql.NullFloat64
		&emp.ManagerID,     // Scan into sql.NullInt64
		&emp.DepartmentID,  // Scan into sql.NullInt64
		&emp.IsActive,
		&emp.ProfileNotes, // Scan into sql.NullString
		&emp.BonusPercentage, // Scan into sql.NullFloat64
	)

	// 5. Handle potential errors from Scan
	if err != nil {
		// Check for the specific "no rows found" error
		if errors.Is(err, sql.ErrNoRows) {
			// Return nil employee and a clear "not found" error (or just nil, nil)
			return nil, fmt.Errorf("employee with ID %d not found", id)
		}
		// For other errors (connection issues, data type mismatch, etc.), wrap the error
		// %w allows callers to use errors.Is or errors.As on the wrapped error.
		return nil, fmt.Errorf("failed to scan employee data for ID %d: %w", id, err)
	}

	// 6. Return the populated Employee struct and nil error on success
	return &emp, nil
}

// --- Example Usage ---

func main() {
	// Replace with your actual PostgreSQL connection string
	// Format: "postgres://user:password@host:port/database?sslmode=disable"
	connStr := "postgres://user:password@localhost:5432/company_db?sslmode=disable"

	store, err := NewPostgresStore(connStr)
	if err != nil {
		log.Fatalf("Error creating store: %v", err)
	}
	defer store.Close() // Ensure the connection pool is closed when main exits

	// Create a context with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Important to call cancel to release resources

	employeeIDToFind := int64(101) // Example ID

	// --- Usage with *sql.DB ---
	log.Printf("Attempting to fetch employee %d directly...", employeeIDToFind)
	employee, err := store.GetEmployeeByID(ctx, store.db, employeeIDToFind) // Pass store.db directly
	if err != nil {
		log.Printf("Error fetching employee: %v", err)
	} else {
		log.Printf("Found employee: %+v", *employee)
		// Access Nullable fields safely:
		if employee.Email.Valid {
			log.Printf("Employee Email: %s", employee.Email.String)
		} else {
			log.Println("Employee Email: NULL")
		}
	}

	// --- Usage within a Transaction (*sql.Tx) ---
	log.Println("\nAttempting fetch within a transaction...")
	tx, err := store.db.BeginTx(ctx, nil) // Start a transaction
	if err != nil {
		log.Fatalf("Failed to begin transaction: %v", err)
	}

	// Use 'defer tx.Rollback()' for safety in case of errors before Commit
	// This ensures the transaction is rolled back if something goes wrong.
	// It's a no-op if Commit() is called successfully first.
	defer tx.Rollback()

	employeeInTx, err := store.GetEmployeeByID(ctx, tx, employeeIDToFind) // Pass the transaction 'tx'
	if err != nil {
		log.Printf("Error fetching employee within transaction: %v", err)
		// Rollback will happen due to defer
	} else {
		log.Printf("Found employee within transaction: %+v", *employeeInTx)

		// Perform other operations within the same transaction...
		// e.g., update another table related to this employee
		// _, err = tx.ExecContext(ctx, "UPDATE some_other_table SET status='processed' WHERE emp_id = $1", employeeIDToFind)
		// if err != nil { ... handle error, rollback happens via defer ... }

		// If all operations succeed, commit the transaction
		if err := tx.Commit(); err != nil {
			log.Fatalf("Failed to commit transaction: %v", err)
		} else {
			log.Println("Transaction committed successfully.")
		}
	}
}