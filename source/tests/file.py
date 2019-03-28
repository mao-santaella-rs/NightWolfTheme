import sys
from sys import *
class Hello(object):
    def __init__(self):
        object.__init__(self)
    def hello(self):
        print >> sys.stderr, "Hi there!"
    None, True, False
    r'raw \' \
        string'
    r"""raw multiline \"""
        string"""

Hello().hello()



"""@package docstring
Documentation for this module.
More details.
"""
def func():
    """Documentation for a function.
    More details.
    """
    pass
class PyClass:
    """Documentation for a class.
    More details.
    """
   
    def __init__(self):
        """The constructor."""
        self._memVar = 0;
   
    def PyMethod(self):
        """Documentation for a method."""
        pass



## @package pyexample
#  Documentation for this module.
#
#  More details.
## Documentation for a function.
#
#  More details.
def func():
    pass
## Documentation for a class.
#
#  More details.
class PyClass:
   
    ## The constructor.
    def __init__(self):
        self._memVar = 0;
   
    ## Documentation for a method.
    #  @param self The object pointer.
    def PyMethod(self):
        pass
     
    ## A class variable.
    classVar = 0;
    ## @var _memVar
    #  a member variable