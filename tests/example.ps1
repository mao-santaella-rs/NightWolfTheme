# PowerShell example: functions, classes, pipeline usage

class Person {
    [string] $Name
    [int] $Age

    Person([string] $name, [int] $age) {
        $this.Name = $name
        $this.Age = $age
    }

    [string] Describe() {
        return "Person(Name=$($this.Name), Age=$($this.Age))"
    }

    [void] HaveBirthday() {
        $this.Age += 1
    }
}

function Divide([double] $a, [double] $b) {
    if ($b -eq 0) { throw "Division by zero" }
    return $a / $b
}

# Pipeline-friendly function
function Get-RandomNumbers {
    param([int] $Count = 5)
    1..$Count | ForEach-Object { Get-Random -Minimum 0 -Maximum 100 }
}

# Usage
$p = [Person]::new('Zoe', 30)
Write-Output $p.Describe()
$p.HaveBirthday()
Write-Output ("After birthday: " + $p.Describe())

try {
    $r = Divide 10 2
    Write-Output ("10 / 2 = " + $r)
} catch {
    Write-Error $_
}

Get-RandomNumbers -Count 5 | ForEach-Object { Write-Output "Rand: $_" }
