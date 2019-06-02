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
