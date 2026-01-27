// Kotlin example: comprehensive small program

package examples

import kotlin.random.Random
import kotlinx.coroutines.*

interface Describable {
    fun describe(): String
}

data class Person(var name: String, var age: Int): Describable {
    override fun describe() = "Person(name=$name, age=$age)"
    fun haveBirthday() { age += 1 }
}

fun divide(a: Double, b: Double): Double {
    require(b != 0.0) { "Division by zero" }
    return a / b
}

suspend fun fetchGreeting(): String {
    delay(100)
    return "Hello from coroutines Kotlin!"
}

fun main() = runBlocking {
    val p = Person("Luca", 34)
    println(p.describe())
    p.haveBirthday()
    println("After birthday: ${p.describe()}")

    try {
        println("10 / 2 = ${divide(10.0, 2.0)}")
    } catch (e: IllegalArgumentException) {
        println("Error: ${e.message}")
    }

    println(fetchGreeting()) // suspend inside runBlocking

    // higher-order functions and sequences
    val numbers = listOf(1,2,3,4,5)
    val doubled = numbers.map { it * 2 }
    println("Doubled: $doubled")

    val randomNumbers = generateSequence { Random.nextInt(0, 100) }.take(5).toList()
    println("Random: $randomNumbers")
}
