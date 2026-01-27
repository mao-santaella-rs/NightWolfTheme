-- Lua example: comprehensive snippets

-- Module-like table
local M = {}

function M.greet(name)
    return string.format("Hello, %s!", name)
end

-- Using tables as objects
local Person = {}
Person.__index = Person

function Person.new(name, age)
    return setmetatable({ name = name, age = age }, Person)
end

function Person:describe()
    return string.format("Person(name=%s, age=%d)", self.name, self.age)
end

function Person:hava_birthday()
    self.age = self.age + 1
end

-- Iterator example
local function range(n)
    local i = 0
    return function()
        i = i + 1
        if i <= n then return i end
    end
end

-- Metatable example for default values
local defaults = { color = "blue", size = 10 }
local obj = setmetatable({}, { __index = defaults })

-- Usage
local p = Person.new("Maya", 26)
print(p:describe())

p:hava_birthday()
print("After birthday:", p:describe())

print(M.greet("World"))

for i in range(5) do
    io.write(i, " ")
end
print()

print("obj.color =", obj.color, "obj.size =", obj.size)

return M
