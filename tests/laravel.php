<?php

/**
 * Laravel Syntax Highlighting Test File (Single File Example)
 *
 * This file contains code snippets representative of various parts of a
 * Laravel application (Routes, Controllers, Models, Migrations, Blade Views)
 * combined into one file SOLELY for testing VS Code theme syntax highlighting.
 *
 * NOTE: This file is NOT a runnable Laravel application. Blade syntax is
 * included within comments/strings for highlighting purposes.
 *
 * Assumes modern PHP (8.1+) and Laravel features for broader syntax coverage.
 */

declare(strict_types=1);

// --- Namespaces and Use Statements (Common in Laravel) ---
namespace App\Http\Controllers; // Example namespace typical for a controller

// Common Facades and Classes used in Laravel
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\View\View as ViewContract; // Aliasing an interface
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Collection;
use App\Models\User; // Assuming a User model exists
use App\Services\BillingService; // Example custom service
use App\Enums\UserStatus; // Example Enum (PHP 8.1+)
use App\Attributes\ApiRoute; // Example Attribute (PHP 8.0+)
use App\Http\Middleware\Authenticate; // Example middleware

// Group use statement
use App\Models\{ Post, Comment as UserComment }; // Alias inside group use

// --- Constants (Global or Class-based) ---
define('APP_START_TIME', microtime(true));
const DEFAULT_CACHE_TTL = 3600; // Global constant

// --- Trait Definition ---
trait HasUuid
{
    protected static function bootHasUuid(): void
    {
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                // Assuming Str facade was imported or use \Illuminate\Support\Str
                $model->uuid = \Illuminate\Support\Str::uuid()->toString();
            }
        });
    }

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}

// --- Enum Definition (PHP 8.1+) ---
enum OrderStatus: string
{
    case Pending = 'pending';
    case Processing = 'processing';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match($this) {
            self::Pending => 'Awaiting Payment',
            self::Processing => 'Order Processing',
            self::Completed => 'Order Completed',
            self::Cancelled => 'Order Cancelled',
        };
    }

    public static function activeStatuses(): array
    {
        return [self::Pending, self::Processing];
    }
}

// --- Attribute Definition (PHP 8.0+) ---
#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION)]
class LogExecutionTime
{
    public function __construct(public string $channel = 'default') {}
}

// --- Interface Definition ---
interface CanBeNotified
{
    public function notifyViaEmail(string $subject, string $message): bool;
    public function getNotificationPreference(): string;
}

// --- (Simulated) Model Definition ---
/**
 * Represents a User model typically found in app/Models/User.php
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property UserStatus $status // Example using Enum cast
 */
class User extends Model implements CanBeNotified // Extend Eloquent Model and implement interface
{
    use HasUuid; // Using a trait

    // Define mass assignable attributes
    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
    ];

    // Define hidden attributes (for serialization)
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Define attribute casting
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed', // Laravel 10+ hashing cast
        'status' => UserStatus::class, // Casting to an Enum (PHP 8.1+)
    ];

    // Define an Eloquent relationship (e.g., User has many Posts)
    public function posts(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        // Assuming Post model exists
        return $this->hasMany(Post::class);
    }

    // Define an Eloquent relationship (e.g., User belongs to Team)
    public function team(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
         // Assuming Team model exists
        return $this->belongsTo(\App\Models\Team::class);
    }

    // Define an Accessor (computed property)
    public function getIsAdminAttribute(): bool
    {
        // Example logic
        return str_ends_with($this->email, '@admin.example.com');
    }

    // Define a Mutator (modify value before saving)
    public function setPasswordAttribute(string $value): void
    {
        // Assuming Hash facade was imported or use \Illuminate\Support\Facades\Hash
        $this->attributes['password'] = \Illuminate\Support\Facades\Hash::make($value);
    }

    // Implementing interface method
    public function notifyViaEmail(string $subject, string $message): bool
    {
        // Assume Mail facade is used here
        Log::info("Simulating sending email to {$this->email} with subject: $subject");
        return true;
    }

    public function getNotificationPreference(): string
    {
        return 'email';
    }

    // Example Query Scope
    public function scopeActive(Builder $query): void
    {
        $query->where('status', UserStatus::Active); // Assuming UserStatus::Active exists
    }
}


// --- (Simulated) Controller Definition ---
/**
 * Represents a Controller typically found in app/Http/Controllers/
 */
class PostController extends Controller // Assuming a base Controller exists
{
    // Constructor Dependency Injection
    public function __construct(
        private readonly BillingService $billing, // Inject service (readonly PHP 8.1+)
        protected Post $postModel // Inject model (optional)
    ) {
        // Apply middleware using constructor
        $this->middleware('auth')->except(['index', 'show']);
        $this->middleware(Authenticate::class)->only('store');
    }

    /**
     * Display a listing of the resource.
     * Using Route Model Binding and Dependency Injection.
     * Type hints: Request, ViewContract
     */
    #[LogExecutionTime(channel: 'posts')] // Attribute (PHP 8.0+)
    public function index(Request $request): ViewContract
    {
        // Using query builder via facade
        $posts = DB::table('posts')
                   ->where('is_published', true)
                   ->orderBy('created_at', 'desc')
                   ->paginate(15);

        // Using Eloquent via injected model or facade
        $latestPost = $this->postModel::latest()->first();
        // $latestPost = Post::latest()->first(); // Alternative using facade/imported model

        // Using helper function and passing data to view
        return view('posts.index', [
            'posts' => $posts,
            'latestPostTitle' => $latestPost?->title, // Nullsafe operator (PHP 8.0+)
            'isAdmin' => Auth::check() && Auth::user()->isAdmin, // Using Auth facade
            'flashMessage' => $request->session()->get('status'), // Using session from request
        ]);
    }

    /**
     * Display the specified resource.
     * Route Model Binding automatically finds the Post or throws 404.
     */
    public function show(Post $post): ViewContract // Route Model Binding
    {
        // Authorization example (assuming Gate facade exists)
        // Gate::authorize('view', $post);

        // Eager loading relationships
        $post->load('author', 'comments.user');

        // Accessing config value
        $showAuthor = config('blog.show_author_name', true);

        return view('posts.show', compact('post', 'showAuthor')); // compact() helper
    }

    /**
     * Store a newly created resource in storage.
     * Using a Form Request for validation.
     */
    public function store(\App\Http\Requests\StorePostRequest $request): \Illuminate\Http\RedirectResponse
    {
        // Data is already validated by StorePostRequest

        // Retrieve validated data
        $validated = $request->validated();

        // Create post using Eloquent Mass Assignment
        $post = Post::create($validated + ['user_id' => Auth::id()]);

        // Using injected service
        $this->billing->recordPostCreation($post);

        // Caching example
        Cache::put("post:{$post->id}", $post, DEFAULT_CACHE_TTL);

        // Redirecting with flash message using helper
        return redirect()->route('posts.show', $post)->with('status', 'Post created successfully!');
    }

    // Example using PHP 8 Union Type hint
    public function update(Request $request, Post $post): string|int
    {
         // ... update logic ...
         return $post->id;
    }

     // Example using PHP 8.1 Intersection Type hint
    // public function process(CanBeNotified & \App\Contracts\Runnable $processor): void
    // {
    //     // ... process logic ...
    // }
}


// --- (Simulated) Route Definitions (`routes/web.php` or `routes/api.php`) ---

/**
 * Example route definitions typically found in route files.
 */
class SimulatedRoutes
{
    public static function register(): void
    {
        // Basic GET route with Closure
        Route::get('/', function () {
            // Using View facade
            return View::make('welcome', ['version' => app()->version()]);
        })->name('home');

        // Route using Controller Action syntax
        Route::get('/posts', [PostController::class, 'index'])->name('posts.index')->middleware('guest');
        Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show'); // Route model binding {post}
        Route::post('/posts', [PostController::class, 'store'])->name('posts.store')->middleware(['auth', 'verified']); // Multiple middleware

        // Route group with middleware and prefix
        Route::middleware(['auth:sanctum', 'throttle:60,1'])->prefix('api/v1')->group(function () {
            Route::get('/user', function (Request $request) {
                return $request->user();
            });
            // Resource controller routes (index, create, store, show, edit, update, destroy)
            Route::apiResource('articles', \App\Http\Controllers\Api\ArticleController::class);
        });

        // Example fallback route
        Route::fallback(function () {
            return response()->view('errors.404', [], 404);
        });

        // Example using a helper
        $postId = 123;
        $url = route('posts.show', ['post' => $postId]);
    }
}
// SimulatedRoutes::register(); // Call to simulate registration


// --- (Simulated) Migration Definition ---
/**
 * Example migration typically found in database/migrations/
 */
class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up(): void
    {
        // Using Schema facade
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); // Alias for ->bigIncrements('id');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key constraint
            $table->string('title', 191); // Varchar with specific length (index considerations)
            $table->text('body');
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable(); // Nullable timestamp
            $table->string('slug')->unique(); // Unique index
            $table->json('meta')->nullable(); // JSON column type
            $table->timestamps(); // Adds created_at and updated_at columns
            $table->softDeletes(); // Adds deleted_at column for soft deletes
        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
}

// --- (Simulated) Service Provider ---
/**
 * Example Service Provider typically found in app/Providers/
 */
class AnalyticsServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     * @return void
     */
    public function register(): void
    {
        $this->app->singleton(BillingService::class, function ($app) {
            // Resolve dependencies from the container
            return new BillingService($app->make(\App\Contracts\PaymentGateway::class));
        });
    }

    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot(): void
    {
        // Example using View composer
        View::composer('partials.stats', function ($view) {
            $view->with('userCount', Cache::remember('user_count', 60, fn() => User::count()));
        });

        // Example publishing configuration
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/analytics.php' => config_path('analytics.php'),
            ], 'config');
        }

        // Loading routes (if package provides routes)
        // $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
    }
}


// --- (Simulated) Blade View Syntax (within comments/strings) ---

/*
// --- EXAMPLE: resources/views/layouts/app.blade.php ---

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', config('app.name', 'Laravel'))</title> {{-- Using config helper --}}
    @stack('styles') {{-- Placeholder for CSS pushed from child views --}}
</head>
<body>
    <nav>...</nav>

    @include('partials.flash-messages') {{-- Including a sub-view --}}

    <main class="py-4">
        @yield('content') {{-- Main content placeholder --}}
    </main>

    @stack('scripts') {{-- Placeholder for JS pushed from child views --}}
</body>
</html>
*/

/*
// --- EXAMPLE: resources/views/posts/show.blade.php ---

@extends('layouts.app') {{-- Extending the layout --}}

@section('title', $post->title) {{-- Defining the title section --}}

@push('styles') {{-- Pushing specific styles for this page --}}
    <link rel="stylesheet" href="{{ asset('css/post-styles.css') }}"> {{-- Using asset helper --}}
@endpush

@section('content') {{-- Defining the main content --}}
    <h1>{{ $post->title }}</h1> {{-- Escaped output --}}

    @if ($showAuthor && $post->author)
        <p>By: {{ $post->author->name }}</p>
    @endif

    <div class="post-body">
        {!! $post->rendered_body !!} {{-- Unescaped output (use with caution!) --}}
    </div>

    {{-- Conditional sections based on authentication --}}
    @auth {{-- User is authenticated --}}
        <button>Edit Post</button>
    @endauth

    @guest {{-- User is not authenticated --}}
        <p><a href="{{ route('login') }}">Login</a> to comment.</p> {{-- Using route helper --}}
    @endguest

    {{-- Loop through comments --}}
    <h2>Comments</h2>
    @forelse ($post->comments as $comment)
        <div class="comment">
            <p>{{ $comment->body }}</p>
            <small>By {{ $comment->user->name }} at {{ $comment->created_at->diffForHumans() }}</small> {{-- Carbon date formatting --}}
        </div>
    @empty
        <p>No comments yet.</p>
    @endforelse

    {{-- Including another view with data --}}
    @include('partials.author-bio', ['author' => $post->author])

    {{-- Component syntax --}}
    @component('components.alert', ['type' => 'info'])
        @slot('title')
            Information
        @endslot
        This post was published on {{ $post->published_at?->format('M d, Y') }}. {{-- Nullsafe operator --}}
    @endcomponent

    {{-- Anonymous Blade component syntax --}}
    <x-button type="primary" :url="route('posts.index')">
        Back to Posts
    </x-button>

    {{-- Localization example --}}
    <p>{{ __('messages.welcome') }}</p>

@endsection {{-- End content section --}}

@push('scripts') {{-- Pushing specific scripts --}}
    <script src="{{ mix('js/post-view.js') }}"></script> {{-- Using mix helper --}}
@endpush
*/


// --- Other Standalone PHP Syntax Examples ---

// Arrow function (PHP 7.4+)
$multiplier = 2;
$multiply = fn($num) => $num * $multiplier;

// Match expression (PHP 8.0+)
$statusCode = 404;
$message = match ($statusCode) {
    200, 304 => 'OK',
    404 => 'Not Found',
    500 => 'Server Error',
    default => 'Unknown status',
};

// Collections Example (Laravel Helper)
$collection = collect([1, 2, 3, 4, 5]);
$filteredAndMapped = $collection->filter(fn($item) => $item % 2 === 0)
                                ->map(fn($item) => $item * 10); // [20, 40]

// Generator Function
function numberRange(int $start, int $end): Generator
{
    for ($i = $start; $i <= $end; $i++) {
        yield $i;
    }
}

// Try-catch block
try {
    // Code that might throw
    $user = User::findOrFail(9999); // Might throw ModelNotFoundException
} catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
    Log::warning("User not found.", ['id' => 9999]);
    abort(404, "User not found"); // Using abort helper
} catch (\Throwable $t) { // Catching any throwable (PHP 7+)
    Log::error("An unexpected error occurred: {$t->getMessage()}");
    // Handle other errors
} finally {
    // Code that always runs
    DB::disconnect('mysql'); // Example
}


echo "\n--- Laravel Syntax Test File Processing Complete (for highlighting only) ---\n";

// End of file
?>