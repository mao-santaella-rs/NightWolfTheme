<html>
  <head>
    <title>App Name - @yield('title')</title>
  </head>
  <body>
    @section('sidebar')
      This is the master sidebar.
    @show

    <div class="container">
      @yield('content')
    </div>

    @extends('layouts.app')

    @section('title', 'Page Title')

    @section('sidebar')
      @parent

      <p>This is appended to the master sidebar.</p>
    @endsection

    @section('content')
      <p>This is my body content.</p>
    @endsection

    @yield('content', View::make('view.name'))


    <div class="alert alert-danger">
        {{ $slot }}
    </div>

    @component('alert')
      <strong>Whoops!</strong> Something went wrong!
    @endcomponent

    @componentFirst(['custom.alert', 'alert'])
      <strong>Whoops!</strong> Something went wrong!
    @endcomponent

    <div class="alert alert-danger">
      <div class="alert-title">{{ $title }}</div>

        {{ $slot }}
    </div>

    @component('alert')
      @slot('title')
          Forbidden
      @endslot

      You are not allowed to access this resource!
    @endcomponent


    @if (count($records) === 1)
      I have one record!
    @elseif (count($records) > 1)
      I have multiple records!
    @else
      I don't have any records!
    @endif

    @unless (Auth::check())
      You are not signed in.
    @endunless

    @isset($records)
      {{-- $records is defined and is not null... --}}
    @endisset

    @empty($records)
      {{-- $records is "empty"... --}}
    @endempty

    @auth
      {{-- The user is authenticated... --}}
    @endauth

    @guest
      {{-- The user is not authenticated... --}}
    @endguest

    @auth('admin')
      {{-- // The user is authenticated... --}}
    @endauth

    @guest('admin')
      {{-- // The user is not authenticated... --}}
    @endguest

    @hasSection('navigation')
      <div class="pull-right">
        @yield('navigation')
      </div>

      <div class="clearfix"></div>
    @endif

    @switch($i)
      @case(1)
        First case...
        @break

      @case(2)
        Second case...
        @break

      @default
        Default case...

    @endswitch

    @for ($i = 0; $i < 10; $i++)
      The current value is {{ $i }}
    @endfor

    @foreach ($users as $user)
      <p>This is user {{ $user->id }}</p>
    @endforeach

    @forelse ($users as $user)
      <li>{{ $user->name }}</li>
    @empty
      <p>No users</p>
    @endforelse

    @while (true)
      <p>I'm looping forever.</p>
    @endwhile


    @foreach ($users as $user)
      @if ($user->type == 1)
        @continue
      @endif

      <li>{{ $user->name }}</li>

      @if ($user->number == 5)
        @break
      @endif
    @endforeach

    @push('scripts')
      <script src="/example.js"></script>
    @endpush


    <?php
      namespace App\Providers;

      use Illuminate\Support\Facades\Blade;
      use Illuminate\Support\ServiceProvider;

      class AppServiceProvider extends ServiceProvider
      {
        /**
        * Register bindings in the container.
        *
        * @return void
        */
        public function register()
        {
            //
        }

        /**
        * Bootstrap any application services.
        *
        * @return void
        */
        public function boot()
        {
          Blade::directive('datetime', function ($expression) {
            return "<?php echo ($expression)->format('m/d/Y H:i'); ?>";
          });
        }
      }
    ?>
  </body>
</html