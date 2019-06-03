using System;
using C5;

namespace Dataflow.Core {
  public interface IPatchContainer {
      ICollectionValue<IOutlet> Outlets {
          get;
      }
      ICollectionValue<IInlet> Inlets {
          get;
      }
      int CurrentFrame {
          get;
      }

      void ExecutePatch();

      Outlet<T> AddOutlet<T> (String name);
      Inlet<T> AddInlet<T> (String name);
      Inlet<T> AddPassiveInlet<T> (String name);
      Inlet<T> AddActivateOnChangeInlet<T> (String name);
  }

  class maoma {
    
  }

  public interface IInlet {
      IPatchContainer Container {
          get;
      }
  }

  public interface IOutlet {
      IPatchContainer Container {
          get;
      }
      void ConnectTo(IInlet inlet);
      void PropagateChanges(IList<IPatchContainer> fun);
  }

  public interface IPatch {
      void Init(IPatchContainer container);
      void Execute();
  }
}