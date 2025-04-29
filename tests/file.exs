# Elixir Syntax Highlighting Test File (.ex or .exs)

# --- Module Documentation ---
@moduledoc """
This module serves as a comprehensive test case for Elixir syntax
highlighting in various editors and themes. It includes examples of
modules, functions, macros, typespecs, data structures, control flow,
sigils, comments, and common patterns.

It includes features up to recent Elixir versions.
"""

# --- Module Definition and Directives ---
defmodule ElixirSyntaxTest do
  @moduledoc false # Disable outer documentation for this specific module example

  # --- Imports and Aliases ---
  alias __MODULE__, as: Test # Self alias
  alias ElixirSyntaxTest.NestedModule # Alias nested module
  require Logger           # Require Logger for macro usage (e.g., Logger.debug)
  import Kernel, except: [inspect: 1] # Import functions from Kernel, excluding one arity
  import List, only: [flatten: 1] # Import specific function
  use GenServer           # Use behaviour (pulls in callbacks, etc.)

  # --- Module Attributes ---
  @behaviour GenServer # Explicitly defining behaviour adherence
  @compile {:inline, my_inline_fun: 1} # Compiler options
  @external_resource "path/to/resource.txt" # External resource tracking
  @my_custom_attribute :some_value # Custom module attribute
  @another_attr {"a tuple", 123}

  # --- Typespecs (Common with Dialyzer) ---
  @type config :: keyword() | map() | nil
  @type user_id :: String.t() | integer()
  @opaque internal_state :: %{required(:data) => any(), optional(:cache) => map()}

  @spec process_data(data :: any(), options :: config()) :: {:ok, result :: map()} | {:error, reason :: atom()}
  @callback handle_info(msg :: any(), state :: internal_state()) ::
              {:noreply, internal_state()} # Example behaviour callback spec

  # --- Struct Definition ---
  defstruct name: "Default Name", # Default value
            age: 0,
            tags: [:elixir, :syntax], # List as default
            metadata: %{} # Map as default

  # --- Constants (using module attributes) ---
  @default_timeout 5000
  @api_version "v1.0"

  # --- Public Function Definitions ---

  @doc """
  Public function example with multiple clauses, pattern matching, guards,
  and default arguments. Uses typespecs.
  """
  @spec greet(name :: String.t(), greeting \\ "Hello") :: String.t() | {:error, :invalid_name}
  def greet(name, greeting \\ "Hello") # Default argument

  # Function clause with pattern matching and guard
  def greet(name, greeting) when is_binary(name) and name != "" do
    formatted_greeting = greeting |> String.capitalize() # Using pipe operator
    "#{formatted_greeting}, #{name}!" # String interpolation
  end

  # Another function clause
  def greet(nil, _greeting) do
    # Using custom module attribute
    Logger.warn("Received nil name. Custom attribute: #{@my_custom_attribute}")
    {:error, :invalid_name}
  end

  # Catch-all clause
  def greet(_, _) do
    {:error, :invalid_name}
  end

  # --- Pattern Matching Examples ---
  def handle_tuple({:ok, value}), do: "Success with value: #{inspect(value)}" # Single line function
  def handle_tuple({:error, reason}), do: "Error: #{reason}"
  def handle_tuple(_), do: "Unknown tuple format"

  def handle_map(%{status: "active", name: name}), do: "Active user: #{name}"
  def handle_map(%{status: "pending"}), do: "User is pending"
  def handle_map(other_map) when is_map(other_map), do: "Some other map"

  # --- Private Functions ---
  defp calculate(x, y) when is_integer(x) and is_integer(y) do
    # Local variable assignment (matching)
    sum = x + y
    product = x * y
    # Tuple return
    {sum, product}
  end

  # --- Macros ---
  # Simple macro example
  defmacro __using__(_opts) do
    quote do
      # Code injected into the calling module
      import ElixirSyntaxTest, only: [utility_function: 0]
      @before_compile ElixirSyntaxTest # Register compile callback
    end
  end

  # Compile callback example
  defmacro __before_compile__(_env) do
    quote do
      def injected_function, do: "I was injected!"
    end
  end

  # Public function likely defined by `use GenServer` or a macro
  def utility_function, do: :utility_result

  # --- Variables, Literals, and Data Structures ---
  def data_examples do
    # --- Atoms ---
    status = :ok
    error_reason = :not_found
    bool_true = true
    bool_false = false
    nil_val = nil
    module_atom = Kernel # Module names are atoms

    # --- Numbers ---
    integer_val = 1_234_567 # Integer with underscore separator
    float_val = 3.14159
    scientific_float = 6.022e23
    hex_val = 0xFE_01 # Hexadecimal
    octal_val = 0o755 # Octal
    binary_val = 0b1010_1100 # Binary

    # --- Strings & Charlists ---
    string_val = "Hello\nWorld! with interpolation: #{integer_val}" # Double quotes, interpolation, escapes
    charlist_val = 'charlist example' # Single quotes

    # --- Binaries ---
    binary_val = <<1, 2, 3>> # Simple binary
    bitstring_val = <<1::size(1), 7::size(3)>> # Bitstring with sizes
    utf8_binary = <<"你好"::utf8>>
    mixed_binary = <<10, "rest"::binary>>

    # --- Lists ---
    simple_list = [1, 2, 3, status]
    keyword_list = [name: "Alice", age: 30, active: true] # Keyword list (syntactic sugar)
    improper_list = [1, 2 | 3] # Improper list with '|'
    list_concat = simple_list ++ [4, 5] # List concatenation
    list_subtract = list_concat -- [1, 3] # List subtraction

    # --- Tuples ---
    simple_tuple = {:data, 123, "info"}
    two_tuple = {status, "Operation succeeded"}

    # --- Maps ---
    simple_map = %{name: "Bob", age: 25} # Map with atom keys
    map_with_string_keys = %{"first_name" => "Bob", "last_name" => "Smith"} # Map with string keys
    map_access = simple_map.name # Access using dot notation (atom keys only)
    map_access_bracket = simple_map[:age] # Access using bracket notation
    # Map update syntax
    updated_map = %{simple_map | age: 26, status: :updated}

    # --- Structs ---
    # Using `defstruct` defined earlier
    default_struct = %ElixirSyntaxTest{}
    custom_struct = %ElixirSyntaxTest{name: "Custom Name", age: 10}
    updated_struct = %{custom_struct | age: 11}

    # --- Sigils ---
    regex_val = ~r/elixir\s+syntax/i # Regular expression sigil
    string_sigil = ~s(this is a string) # String sigil (alternative quoting)
    charlist_sigil = ~c(this is a charlist) # Charlist sigil
    word_list_sigil = ~w(one two three four)a # Word list sigil (atoms)
    word_list_strings = ~w(one two three four)s # Word list sigil (strings)
    naive_datetime_sigil = ~N[2025-04-28 18:59:00] # NaiveDateTime sigil
    utc_datetime_sigil = ~U[2025-04-28 18:59:00Z] # UtcDateTime sigil
    date_sigil = ~D[2025-04-28] # Date sigil
    time_sigil = ~T[18:59:00.123] # Time sigil

    # --- Ranges and Comprehensions ---
    number_range = 1..10 # Integer range
    squares = for n <- number_range, rem(n, 2) == 0, do: n * n # 'for' comprehension with filter
    # Comprehension into a map
    map_comp = for i <- 1..3, into: %{}, do: {:"key_#{i}", i * 10}

    # --- Pin Operator ---
    existing_value = "Pin me"
    # Match fails unless pinned
    # {^existing_value, _} = {"Don't match me", 1} # This would raise MatchError
    # Match succeeds
    {^existing_value, number} = {"Pin me", 42}

    # Return a map of examples
    %{
      atom: status,
      number: integer_val,
      float: float_val,
      string: string_val,
      charlist: charlist_val,
      binary: binary_val,
      list: simple_list,
      keyword: keyword_list,
      tuple: simple_tuple,
      map: simple_map,
      struct: custom_struct,
      sigil_regex: regex_val,
      range: number_range,
      comprehension_list: squares,
      comprehension_map: map_comp,
      pinned_number: number
    }
  end

  # --- Control Flow ---
  def control_flow_examples(input) do
    # --- If / Unless ---
    # `if` is an expression
    result_if =
      if is_integer(input) and input > 0 do
        "Positive integer"
      else
        "Not a positive integer"
      end

    # `unless` is the opposite of `if`
    unless is_nil(input) do
      Logger.info("Input is not nil")
    end

    # --- Case ---
    # Pattern matching control flow
    result_case =
      case input do
        {:ok, value} ->
          "Case matched OK: #{value}"

        {:error, reason} when is_atom(reason) -> # Case with guard
          "Case matched Error: #{reason}"

        %ElixirSyntaxTest{name: name} -> # Match struct
          "Case matched Struct: #{name}"

        _other -> # Catch-all pattern using underscore
          "Case matched other value: #{inspect(_other)}"
      end

    # --- Cond ---
    # Evaluates boolean conditions sequentially
    result_cond =
      cond do
        is_binary(input) and String.length(input) > 10 ->
          "Cond: Long string"

        is_integer(input) ->
          "Cond: Integer input"

        is_list(input) ->
          "Cond: List input"

        true -> # Default condition (always true)
          "Cond: Some other input type"
      end

    # --- With ---
    # Chains successful pattern matches
    result_with =
      with {:ok, name} <- Map.fetch(%{name: "Alice"}, :name), # Successful match continues
           {:ok, age} <- Map.fetch(%{age: 30}, :age),
           # This would fail if :height wasn't present:
           # {:ok, height} <- Map.fetch(%{height: 170}, :height),
           true <- age > 25 do # Can match on boolean results
        # Success block
        "With Success: #{name} is #{age} and older than 25"
      else
        # Failure block (matches the value that caused the failure)
        :error ->
          "With Error: Failed to fetch a required key"

        false ->
          "With Error: Age condition not met"

        _other_error -> # Catch any other non-matching value
          "With Error: Unknown failure - #{inspect(_other_error)}"
      end

    {result_if, result_case, result_cond, result_with}
  end

  # --- Error Handling ---
  def error_handling_example(param) do
    try do
      # Code that might raise an error or throw/exit
      case param do
        :raise -> raise "This is a runtime error"
        :throw -> throw :some_thrown_value
        :exit -> exit(:shutdown)
        :error -> %{}[:non_existent_key] # Raises KeyError
        :ok -> :everything_is_fine
        _ -> :unknown_param
      end
    rescue # Rescue specific errors
      e in [KeyError, RuntimeError] ->
        Logger.error("Rescued a KeyError or RuntimeError: #{inspect(e)}")
        {:rescued, e.__struct__} # Return error type atom
    catch type, value -> # Catch throws, exits, or errors
      Logger.warn("Caught #{type}: #{inspect(value)}")
      {:caught, type}
    after # Always executed
      Logger.info("Error handling 'after' block executed.")
    end
  end

  # --- Concurrency Primitives (Basic Examples) ---
  def concurrency_example do
    parent = self() # Get current process PID

    # Spawn a new process executing a function
    spawn(fn ->
      # Send a message back to the parent process
      send(parent, {:message_from_spawn, "Hello from spawned process!", self()})

      # Receive messages
      receive do
        {:reply, data} ->
          Logger.info("Spawned process received reply: #{inspect(data)}")
        _other ->
          Logger.info("Spawned process received unexpected message: #{inspect(_other)}")
      after # Optional timeout
        @default_timeout -> Logger.warn("Spawned process timed out waiting for reply.")
      end
    end)

    # Wait to receive the message from the spawned process
    receive do
      {:message_from_spawn, msg, sender_pid} ->
        Logger.info("Parent received: '#{msg}' from #{inspect(sender_pid)}")
        # Send a reply back
        send(sender_pid, {:reply, :world})
    after
      1000 -> # Timeout in milliseconds
        Logger.error("Parent timed out waiting for message from spawn.")
    end
  }

  # --- GenServer Callbacks (Examples, matching `use GenServer`) ---
  @impl GenServer
  def init(args) do
    Logger.info("GenServer init with args: #{inspect(args)}")
    initial_state = %{data: args, cache: %{}}
    {:ok, initial_state}
  end

  @impl GenServer
  def handle_call(:get_state, _from, state) do
    {:reply, state, state} # Reply with current state
  end

  @impl GenServer
  def handle_cast({:update_data, new_data}, state) do
    new_state = %{state | data: new_data}
    {:noreply, new_state}
  end

  @impl GenServer
  def handle_info(:tick, state) do
    Logger.debug("GenServer received :tick info message.")
    # Perform periodic task maybe
    {:noreply, state}
  end

  # --- Protocols & Behaviours (Conceptual Placement) ---
  # defprotocol MyProtocol do
  #   @doc "Protocol function documentation"
  #   @spec my_proto_fun(t) :: String.t
  #   def my_proto_fun(data)
  # end

  # defimpl MyProtocol, for: List do
  #   def my_proto_fun(list_data) do
  #     "Implementing protocol for List: #{inspect list_data}"
  #   end
  # end

end

# --- Nested Module Example ---
defmodule ElixirSyntaxTest.NestedModule do
  @moduledoc "A nested module example."
  def nested_function, do: "Result from nested function"
end

# --- Scripting Part (if run as .exs) ---
# This code runs when the file is executed as a script
if System.get_env("RUN_EXAMPLES") == "true" do
  IO.puts("\n--- Running Elixir Syntax Examples ---")

  # Call some functions
  IO.inspect(ElixirSyntaxTest.greet("World"))
  IO.inspect(ElixirSyntaxTest.greet(nil))
  IO.inspect(ElixirSyntaxTest.handle_tuple({:ok, 123}))
  IO.inspect(ElixirSyntaxTest.handle_map(%{status: "active", name: "Test"}))

  # Show data structures
  IO.inspect(ElixirSyntaxTest.data_examples(), label: "\nData Examples")

  # Show control flow
  IO.inspect(ElixirSyntaxTest.control_flow_examples([1, 2]), label: "\nControl Flow (List)")
  IO.inspect(ElixirSyntaxTest.control_flow_examples({:error, :timeout}), label: "\nControl Flow (Error Tuple)")

  # Show error handling
  IO.inspect(ElixirSyntaxTest.error_handling_example(:ok), label: "\nError Handling (:ok)")
  IO.inspect(ElixirSyntaxTest.error_handling_example(:error), label: "\nError Handling (:error)")
  IO.inspect(ElixirSyntaxTest.error_handling_example(:throw), label: "\nError Handling (:throw)")

  # Run concurrency example (will print logs)
  IO.puts("\n--- Running Concurrency Example ---")
  ElixirSyntaxTest.concurrency_example()
  Process.sleep(1500) # Give time for messages to be processed

  IO.puts("\n--- Elixir Syntax Examples Finished ---")
end

# Example of calling an injected function from a macro
# IO.puts ElixirSyntaxTest.injected_function()