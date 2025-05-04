
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model appUser
 * 
 */
export type appUser = $Result.DefaultSelection<Prisma.$appUserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripDay
 * 
 */
export type TripDay = $Result.DefaultSelection<Prisma.$TripDayPayload>
/**
 * Model WeatherInfo
 * 
 */
export type WeatherInfo = $Result.DefaultSelection<Prisma.$WeatherInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appUser`: Exposes CRUD operations for the **appUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.appUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripDay`: Exposes CRUD operations for the **TripDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripDays
    * const tripDays = await prisma.tripDay.findMany()
    * ```
    */
  get tripDay(): Prisma.TripDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherInfo`: Exposes CRUD operations for the **WeatherInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherInfos
    * const weatherInfos = await prisma.weatherInfo.findMany()
    * ```
    */
  get weatherInfo(): Prisma.WeatherInfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    appUser: 'appUser',
    Trip: 'Trip',
    TripDay: 'TripDay',
    WeatherInfo: 'WeatherInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appUser" | "trip" | "tripDay" | "weatherInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      appUser: {
        payload: Prisma.$appUserPayload<ExtArgs>
        fields: Prisma.appUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          findFirst: {
            args: Prisma.appUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          findMany: {
            args: Prisma.appUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>[]
          }
          create: {
            args: Prisma.appUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          createMany: {
            args: Prisma.appUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>[]
          }
          delete: {
            args: Prisma.appUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          update: {
            args: Prisma.appUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          deleteMany: {
            args: Prisma.appUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>[]
          }
          upsert: {
            args: Prisma.appUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.appUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.appUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripDay: {
        payload: Prisma.$TripDayPayload<ExtArgs>
        fields: Prisma.TripDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          findFirst: {
            args: Prisma.TripDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          findMany: {
            args: Prisma.TripDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          create: {
            args: Prisma.TripDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          createMany: {
            args: Prisma.TripDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          delete: {
            args: Prisma.TripDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          update: {
            args: Prisma.TripDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          deleteMany: {
            args: Prisma.TripDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          upsert: {
            args: Prisma.TripDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          aggregate: {
            args: Prisma.TripDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripDay>
          }
          groupBy: {
            args: Prisma.TripDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripDayCountArgs<ExtArgs>
            result: $Utils.Optional<TripDayCountAggregateOutputType> | number
          }
        }
      }
      WeatherInfo: {
        payload: Prisma.$WeatherInfoPayload<ExtArgs>
        fields: Prisma.WeatherInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          findFirst: {
            args: Prisma.WeatherInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          findMany: {
            args: Prisma.WeatherInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>[]
          }
          create: {
            args: Prisma.WeatherInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          createMany: {
            args: Prisma.WeatherInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>[]
          }
          delete: {
            args: Prisma.WeatherInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          update: {
            args: Prisma.WeatherInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          deleteMany: {
            args: Prisma.WeatherInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>[]
          }
          upsert: {
            args: Prisma.WeatherInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherInfoPayload>
          }
          aggregate: {
            args: Prisma.WeatherInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherInfo>
          }
          groupBy: {
            args: Prisma.WeatherInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherInfoCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appUser?: appUserOmit
    trip?: TripOmit
    tripDay?: TripDayOmit
    weatherInfo?: WeatherInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    days: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | TripCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDayWhereInput
  }


  /**
   * Models
   */

  /**
   * Model appUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    imageUrl: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    imageUrl: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    email: number
    imageUrl: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type AppUserMinAggregateInputType = {
    id?: true
    email?: true
    imageUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    email?: true
    imageUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    email?: true
    imageUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appUser to aggregate.
     */
    where?: appUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appUsers to fetch.
     */
    orderBy?: appUserOrderByWithRelationInput | appUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type appUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appUserWhereInput
    orderBy?: appUserOrderByWithAggregationInput | appUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: appUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    email: string
    imageUrl: string
    CreatedAt: Date
    UpdatedAt: Date
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends appUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type appUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imageUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type appUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imageUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type appUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imageUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type appUserSelectScalar = {
    id?: boolean
    email?: boolean
    imageUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type appUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "imageUrl" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["appUser"]>

  export type $appUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      imageUrl: string
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type appUserGetPayload<S extends boolean | null | undefined | appUserDefaultArgs> = $Result.GetResult<Prisma.$appUserPayload, S>

  type appUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface appUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appUser'], meta: { name: 'appUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {appUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appUserFindUniqueArgs>(args: SelectSubset<T, appUserFindUniqueArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appUserFindUniqueOrThrowArgs>(args: SelectSubset<T, appUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appUserFindFirstArgs>(args?: SelectSubset<T, appUserFindFirstArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appUserFindFirstOrThrowArgs>(args?: SelectSubset<T, appUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appUserFindManyArgs>(args?: SelectSubset<T, appUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUser.
     * @param {appUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends appUserCreateArgs>(args: SelectSubset<T, appUserCreateArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsers.
     * @param {appUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appUserCreateManyArgs>(args?: SelectSubset<T, appUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsers and returns the data saved in the database.
     * @param {appUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appUserCreateManyAndReturnArgs>(args?: SelectSubset<T, appUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppUser.
     * @param {appUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends appUserDeleteArgs>(args: SelectSubset<T, appUserDeleteArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUser.
     * @param {appUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appUserUpdateArgs>(args: SelectSubset<T, appUserUpdateArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {appUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appUserDeleteManyArgs>(args?: SelectSubset<T, appUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appUserUpdateManyArgs>(args: SelectSubset<T, appUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers and returns the data updated in the database.
     * @param {appUserUpdateManyAndReturnArgs} args - Arguments to update many AppUsers.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends appUserUpdateManyAndReturnArgs>(args: SelectSubset<T, appUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppUser.
     * @param {appUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends appUserUpsertArgs>(args: SelectSubset<T, appUserUpsertArgs<ExtArgs>>): Prisma__appUserClient<$Result.GetResult<Prisma.$appUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends appUserCountArgs>(
      args?: Subset<T, appUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appUserGroupByArgs['orderBy'] }
        : { orderBy?: appUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appUser model
   */
  readonly fields: appUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appUser model
   */
  interface appUserFieldRefs {
    readonly id: FieldRef<"appUser", 'String'>
    readonly email: FieldRef<"appUser", 'String'>
    readonly imageUrl: FieldRef<"appUser", 'String'>
    readonly CreatedAt: FieldRef<"appUser", 'DateTime'>
    readonly UpdatedAt: FieldRef<"appUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appUser findUnique
   */
  export type appUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter, which appUser to fetch.
     */
    where: appUserWhereUniqueInput
  }

  /**
   * appUser findUniqueOrThrow
   */
  export type appUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter, which appUser to fetch.
     */
    where: appUserWhereUniqueInput
  }

  /**
   * appUser findFirst
   */
  export type appUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter, which appUser to fetch.
     */
    where?: appUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appUsers to fetch.
     */
    orderBy?: appUserOrderByWithRelationInput | appUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appUsers.
     */
    cursor?: appUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * appUser findFirstOrThrow
   */
  export type appUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter, which appUser to fetch.
     */
    where?: appUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appUsers to fetch.
     */
    orderBy?: appUserOrderByWithRelationInput | appUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appUsers.
     */
    cursor?: appUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * appUser findMany
   */
  export type appUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter, which appUsers to fetch.
     */
    where?: appUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appUsers to fetch.
     */
    orderBy?: appUserOrderByWithRelationInput | appUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appUsers.
     */
    cursor?: appUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * appUser create
   */
  export type appUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * The data needed to create a appUser.
     */
    data: XOR<appUserCreateInput, appUserUncheckedCreateInput>
  }

  /**
   * appUser createMany
   */
  export type appUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appUsers.
     */
    data: appUserCreateManyInput | appUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appUser createManyAndReturn
   */
  export type appUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * The data used to create many appUsers.
     */
    data: appUserCreateManyInput | appUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appUser update
   */
  export type appUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * The data needed to update a appUser.
     */
    data: XOR<appUserUpdateInput, appUserUncheckedUpdateInput>
    /**
     * Choose, which appUser to update.
     */
    where: appUserWhereUniqueInput
  }

  /**
   * appUser updateMany
   */
  export type appUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appUsers.
     */
    data: XOR<appUserUpdateManyMutationInput, appUserUncheckedUpdateManyInput>
    /**
     * Filter which appUsers to update
     */
    where?: appUserWhereInput
    /**
     * Limit how many appUsers to update.
     */
    limit?: number
  }

  /**
   * appUser updateManyAndReturn
   */
  export type appUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * The data used to update appUsers.
     */
    data: XOR<appUserUpdateManyMutationInput, appUserUncheckedUpdateManyInput>
    /**
     * Filter which appUsers to update
     */
    where?: appUserWhereInput
    /**
     * Limit how many appUsers to update.
     */
    limit?: number
  }

  /**
   * appUser upsert
   */
  export type appUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * The filter to search for the appUser to update in case it exists.
     */
    where: appUserWhereUniqueInput
    /**
     * In case the appUser found by the `where` argument doesn't exist, create a new appUser with this data.
     */
    create: XOR<appUserCreateInput, appUserUncheckedCreateInput>
    /**
     * In case the appUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appUserUpdateInput, appUserUncheckedUpdateInput>
  }

  /**
   * appUser delete
   */
  export type appUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
    /**
     * Filter which appUser to delete.
     */
    where: appUserWhereUniqueInput
  }

  /**
   * appUser deleteMany
   */
  export type appUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appUsers to delete
     */
    where?: appUserWhereInput
    /**
     * Limit how many appUsers to delete.
     */
    limit?: number
  }

  /**
   * appUser without action
   */
  export type appUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appUser
     */
    select?: appUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appUser
     */
    omit?: appUserOmit<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    budget: number | null
    daysCount: number | null
  }

  export type TripSumAggregateOutputType = {
    budget: number | null
    daysCount: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    imageUrl: string | null
    budget: number | null
    startDate: Date | null
    endDate: Date | null
    daysCount: number | null
    createdAt: Date | null
    weatherInfoid: string | null
    isDraft: boolean | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    imageUrl: string | null
    budget: number | null
    startDate: Date | null
    endDate: Date | null
    daysCount: number | null
    createdAt: Date | null
    weatherInfoid: string | null
    isDraft: boolean | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    title: number
    location: number
    imageUrl: number
    budget: number
    startDate: number
    endDate: number
    daysCount: number
    createdAt: number
    weatherInfoid: number
    isDraft: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    budget?: true
    daysCount?: true
  }

  export type TripSumAggregateInputType = {
    budget?: true
    daysCount?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    imageUrl?: true
    budget?: true
    startDate?: true
    endDate?: true
    daysCount?: true
    createdAt?: true
    weatherInfoid?: true
    isDraft?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    imageUrl?: true
    budget?: true
    startDate?: true
    endDate?: true
    daysCount?: true
    createdAt?: true
    weatherInfoid?: true
    isDraft?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    imageUrl?: true
    budget?: true
    startDate?: true
    endDate?: true
    daysCount?: true
    createdAt?: true
    weatherInfoid?: true
    isDraft?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    title: string
    location: string
    imageUrl: string | null
    budget: number
    startDate: Date
    endDate: Date
    daysCount: number
    createdAt: Date
    weatherInfoid: string
    isDraft: boolean
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    imageUrl?: boolean
    budget?: boolean
    startDate?: boolean
    endDate?: boolean
    daysCount?: boolean
    createdAt?: boolean
    weatherInfoid?: boolean
    isDraft?: boolean
    days?: boolean | Trip$daysArgs<ExtArgs>
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    imageUrl?: boolean
    budget?: boolean
    startDate?: boolean
    endDate?: boolean
    daysCount?: boolean
    createdAt?: boolean
    weatherInfoid?: boolean
    isDraft?: boolean
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    imageUrl?: boolean
    budget?: boolean
    startDate?: boolean
    endDate?: boolean
    daysCount?: boolean
    createdAt?: boolean
    weatherInfoid?: boolean
    isDraft?: boolean
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    imageUrl?: boolean
    budget?: boolean
    startDate?: boolean
    endDate?: boolean
    daysCount?: boolean
    createdAt?: boolean
    weatherInfoid?: boolean
    isDraft?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "imageUrl" | "budget" | "startDate" | "endDate" | "daysCount" | "createdAt" | "weatherInfoid" | "isDraft", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | Trip$daysArgs<ExtArgs>
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weatherInfo?: boolean | WeatherInfoDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      days: Prisma.$TripDayPayload<ExtArgs>[]
      weatherInfo: Prisma.$WeatherInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location: string
      imageUrl: string | null
      budget: number
      startDate: Date
      endDate: Date
      daysCount: number
      createdAt: Date
      weatherInfoid: string
      isDraft: boolean
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends Trip$daysArgs<ExtArgs> = {}>(args?: Subset<T, Trip$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weatherInfo<T extends WeatherInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeatherInfoDefaultArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly location: FieldRef<"Trip", 'String'>
    readonly imageUrl: FieldRef<"Trip", 'String'>
    readonly budget: FieldRef<"Trip", 'Int'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly daysCount: FieldRef<"Trip", 'Int'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly weatherInfoid: FieldRef<"Trip", 'String'>
    readonly isDraft: FieldRef<"Trip", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.days
   */
  export type Trip$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    where?: TripDayWhereInput
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    cursor?: TripDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripDay
   */

  export type AggregateTripDay = {
    _count: TripDayCountAggregateOutputType | null
    _avg: TripDayAvgAggregateOutputType | null
    _sum: TripDaySumAggregateOutputType | null
    _min: TripDayMinAggregateOutputType | null
    _max: TripDayMaxAggregateOutputType | null
  }

  export type TripDayAvgAggregateOutputType = {
    dayIndex: number | null
  }

  export type TripDaySumAggregateOutputType = {
    dayIndex: number | null
  }

  export type TripDayMinAggregateOutputType = {
    id: string | null
    title: string | null
    tripId: string | null
    dayIndex: number | null
    date: Date | null
    morning: string | null
    morningTitle: string | null
    afternoon: string | null
    afternoonTitle: string | null
    evening: string | null
    eveningTitle: string | null
  }

  export type TripDayMaxAggregateOutputType = {
    id: string | null
    title: string | null
    tripId: string | null
    dayIndex: number | null
    date: Date | null
    morning: string | null
    morningTitle: string | null
    afternoon: string | null
    afternoonTitle: string | null
    evening: string | null
    eveningTitle: string | null
  }

  export type TripDayCountAggregateOutputType = {
    id: number
    title: number
    tripId: number
    dayIndex: number
    date: number
    morning: number
    morningTitle: number
    afternoon: number
    afternoonTitle: number
    evening: number
    eveningTitle: number
    _all: number
  }


  export type TripDayAvgAggregateInputType = {
    dayIndex?: true
  }

  export type TripDaySumAggregateInputType = {
    dayIndex?: true
  }

  export type TripDayMinAggregateInputType = {
    id?: true
    title?: true
    tripId?: true
    dayIndex?: true
    date?: true
    morning?: true
    morningTitle?: true
    afternoon?: true
    afternoonTitle?: true
    evening?: true
    eveningTitle?: true
  }

  export type TripDayMaxAggregateInputType = {
    id?: true
    title?: true
    tripId?: true
    dayIndex?: true
    date?: true
    morning?: true
    morningTitle?: true
    afternoon?: true
    afternoonTitle?: true
    evening?: true
    eveningTitle?: true
  }

  export type TripDayCountAggregateInputType = {
    id?: true
    title?: true
    tripId?: true
    dayIndex?: true
    date?: true
    morning?: true
    morningTitle?: true
    afternoon?: true
    afternoonTitle?: true
    evening?: true
    eveningTitle?: true
    _all?: true
  }

  export type TripDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDay to aggregate.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripDays
    **/
    _count?: true | TripDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripDayMaxAggregateInputType
  }

  export type GetTripDayAggregateType<T extends TripDayAggregateArgs> = {
        [P in keyof T & keyof AggregateTripDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripDay[P]>
      : GetScalarType<T[P], AggregateTripDay[P]>
  }




  export type TripDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDayWhereInput
    orderBy?: TripDayOrderByWithAggregationInput | TripDayOrderByWithAggregationInput[]
    by: TripDayScalarFieldEnum[] | TripDayScalarFieldEnum
    having?: TripDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripDayCountAggregateInputType | true
    _avg?: TripDayAvgAggregateInputType
    _sum?: TripDaySumAggregateInputType
    _min?: TripDayMinAggregateInputType
    _max?: TripDayMaxAggregateInputType
  }

  export type TripDayGroupByOutputType = {
    id: string
    title: string
    tripId: string
    dayIndex: number
    date: Date
    morning: string | null
    morningTitle: string | null
    afternoon: string | null
    afternoonTitle: string | null
    evening: string | null
    eveningTitle: string | null
    _count: TripDayCountAggregateOutputType | null
    _avg: TripDayAvgAggregateOutputType | null
    _sum: TripDaySumAggregateOutputType | null
    _min: TripDayMinAggregateOutputType | null
    _max: TripDayMaxAggregateOutputType | null
  }

  type GetTripDayGroupByPayload<T extends TripDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripDayGroupByOutputType[P]>
            : GetScalarType<T[P], TripDayGroupByOutputType[P]>
        }
      >
    >


  export type TripDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tripId?: boolean
    dayIndex?: boolean
    date?: boolean
    morning?: boolean
    morningTitle?: boolean
    afternoon?: boolean
    afternoonTitle?: boolean
    evening?: boolean
    eveningTitle?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tripId?: boolean
    dayIndex?: boolean
    date?: boolean
    morning?: boolean
    morningTitle?: boolean
    afternoon?: boolean
    afternoonTitle?: boolean
    evening?: boolean
    eveningTitle?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tripId?: boolean
    dayIndex?: boolean
    date?: boolean
    morning?: boolean
    morningTitle?: boolean
    afternoon?: boolean
    afternoonTitle?: boolean
    evening?: boolean
    eveningTitle?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectScalar = {
    id?: boolean
    title?: boolean
    tripId?: boolean
    dayIndex?: boolean
    date?: boolean
    morning?: boolean
    morningTitle?: boolean
    afternoon?: boolean
    afternoonTitle?: boolean
    evening?: boolean
    eveningTitle?: boolean
  }

  export type TripDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "tripId" | "dayIndex" | "date" | "morning" | "morningTitle" | "afternoon" | "afternoonTitle" | "evening" | "eveningTitle", ExtArgs["result"]["tripDay"]>
  export type TripDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripDay"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      tripId: string
      dayIndex: number
      date: Date
      morning: string | null
      morningTitle: string | null
      afternoon: string | null
      afternoonTitle: string | null
      evening: string | null
      eveningTitle: string | null
    }, ExtArgs["result"]["tripDay"]>
    composites: {}
  }

  type TripDayGetPayload<S extends boolean | null | undefined | TripDayDefaultArgs> = $Result.GetResult<Prisma.$TripDayPayload, S>

  type TripDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripDayCountAggregateInputType | true
    }

  export interface TripDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripDay'], meta: { name: 'TripDay' } }
    /**
     * Find zero or one TripDay that matches the filter.
     * @param {TripDayFindUniqueArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripDayFindUniqueArgs>(args: SelectSubset<T, TripDayFindUniqueArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripDayFindUniqueOrThrowArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripDayFindUniqueOrThrowArgs>(args: SelectSubset<T, TripDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindFirstArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripDayFindFirstArgs>(args?: SelectSubset<T, TripDayFindFirstArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindFirstOrThrowArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripDayFindFirstOrThrowArgs>(args?: SelectSubset<T, TripDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripDays
     * const tripDays = await prisma.tripDay.findMany()
     * 
     * // Get first 10 TripDays
     * const tripDays = await prisma.tripDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripDayFindManyArgs>(args?: SelectSubset<T, TripDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripDay.
     * @param {TripDayCreateArgs} args - Arguments to create a TripDay.
     * @example
     * // Create one TripDay
     * const TripDay = await prisma.tripDay.create({
     *   data: {
     *     // ... data to create a TripDay
     *   }
     * })
     * 
     */
    create<T extends TripDayCreateArgs>(args: SelectSubset<T, TripDayCreateArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripDays.
     * @param {TripDayCreateManyArgs} args - Arguments to create many TripDays.
     * @example
     * // Create many TripDays
     * const tripDay = await prisma.tripDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripDayCreateManyArgs>(args?: SelectSubset<T, TripDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripDays and returns the data saved in the database.
     * @param {TripDayCreateManyAndReturnArgs} args - Arguments to create many TripDays.
     * @example
     * // Create many TripDays
     * const tripDay = await prisma.tripDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripDays and only return the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripDayCreateManyAndReturnArgs>(args?: SelectSubset<T, TripDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripDay.
     * @param {TripDayDeleteArgs} args - Arguments to delete one TripDay.
     * @example
     * // Delete one TripDay
     * const TripDay = await prisma.tripDay.delete({
     *   where: {
     *     // ... filter to delete one TripDay
     *   }
     * })
     * 
     */
    delete<T extends TripDayDeleteArgs>(args: SelectSubset<T, TripDayDeleteArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripDay.
     * @param {TripDayUpdateArgs} args - Arguments to update one TripDay.
     * @example
     * // Update one TripDay
     * const tripDay = await prisma.tripDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripDayUpdateArgs>(args: SelectSubset<T, TripDayUpdateArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripDays.
     * @param {TripDayDeleteManyArgs} args - Arguments to filter TripDays to delete.
     * @example
     * // Delete a few TripDays
     * const { count } = await prisma.tripDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDayDeleteManyArgs>(args?: SelectSubset<T, TripDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripDays
     * const tripDay = await prisma.tripDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripDayUpdateManyArgs>(args: SelectSubset<T, TripDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDays and returns the data updated in the database.
     * @param {TripDayUpdateManyAndReturnArgs} args - Arguments to update many TripDays.
     * @example
     * // Update many TripDays
     * const tripDay = await prisma.tripDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripDays and only return the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripDayUpdateManyAndReturnArgs>(args: SelectSubset<T, TripDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripDay.
     * @param {TripDayUpsertArgs} args - Arguments to update or create a TripDay.
     * @example
     * // Update or create a TripDay
     * const tripDay = await prisma.tripDay.upsert({
     *   create: {
     *     // ... data to create a TripDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripDay we want to update
     *   }
     * })
     */
    upsert<T extends TripDayUpsertArgs>(args: SelectSubset<T, TripDayUpsertArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayCountArgs} args - Arguments to filter TripDays to count.
     * @example
     * // Count the number of TripDays
     * const count = await prisma.tripDay.count({
     *   where: {
     *     // ... the filter for the TripDays we want to count
     *   }
     * })
    **/
    count<T extends TripDayCountArgs>(
      args?: Subset<T, TripDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripDayAggregateArgs>(args: Subset<T, TripDayAggregateArgs>): Prisma.PrismaPromise<GetTripDayAggregateType<T>>

    /**
     * Group by TripDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripDayGroupByArgs['orderBy'] }
        : { orderBy?: TripDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripDay model
   */
  readonly fields: TripDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripDay model
   */
  interface TripDayFieldRefs {
    readonly id: FieldRef<"TripDay", 'String'>
    readonly title: FieldRef<"TripDay", 'String'>
    readonly tripId: FieldRef<"TripDay", 'String'>
    readonly dayIndex: FieldRef<"TripDay", 'Int'>
    readonly date: FieldRef<"TripDay", 'DateTime'>
    readonly morning: FieldRef<"TripDay", 'String'>
    readonly morningTitle: FieldRef<"TripDay", 'String'>
    readonly afternoon: FieldRef<"TripDay", 'String'>
    readonly afternoonTitle: FieldRef<"TripDay", 'String'>
    readonly evening: FieldRef<"TripDay", 'String'>
    readonly eveningTitle: FieldRef<"TripDay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripDay findUnique
   */
  export type TripDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay findUniqueOrThrow
   */
  export type TripDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay findFirst
   */
  export type TripDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDays.
     */
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay findFirstOrThrow
   */
  export type TripDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDays.
     */
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay findMany
   */
  export type TripDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDays to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay create
   */
  export type TripDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The data needed to create a TripDay.
     */
    data: XOR<TripDayCreateInput, TripDayUncheckedCreateInput>
  }

  /**
   * TripDay createMany
   */
  export type TripDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripDays.
     */
    data: TripDayCreateManyInput | TripDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripDay createManyAndReturn
   */
  export type TripDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * The data used to create many TripDays.
     */
    data: TripDayCreateManyInput | TripDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDay update
   */
  export type TripDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The data needed to update a TripDay.
     */
    data: XOR<TripDayUpdateInput, TripDayUncheckedUpdateInput>
    /**
     * Choose, which TripDay to update.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay updateMany
   */
  export type TripDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripDays.
     */
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyInput>
    /**
     * Filter which TripDays to update
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to update.
     */
    limit?: number
  }

  /**
   * TripDay updateManyAndReturn
   */
  export type TripDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * The data used to update TripDays.
     */
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyInput>
    /**
     * Filter which TripDays to update
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDay upsert
   */
  export type TripDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The filter to search for the TripDay to update in case it exists.
     */
    where: TripDayWhereUniqueInput
    /**
     * In case the TripDay found by the `where` argument doesn't exist, create a new TripDay with this data.
     */
    create: XOR<TripDayCreateInput, TripDayUncheckedCreateInput>
    /**
     * In case the TripDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripDayUpdateInput, TripDayUncheckedUpdateInput>
  }

  /**
   * TripDay delete
   */
  export type TripDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter which TripDay to delete.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay deleteMany
   */
  export type TripDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDays to delete
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to delete.
     */
    limit?: number
  }

  /**
   * TripDay without action
   */
  export type TripDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
  }


  /**
   * Model WeatherInfo
   */

  export type AggregateWeatherInfo = {
    _count: WeatherInfoCountAggregateOutputType | null
    _min: WeatherInfoMinAggregateOutputType | null
    _max: WeatherInfoMaxAggregateOutputType | null
  }

  export type WeatherInfoMinAggregateOutputType = {
    id: string | null
    season: string | null
    temperatureInfo: string | null
    description: string | null
    itemsToPack: string | null
    considerations: string | null
  }

  export type WeatherInfoMaxAggregateOutputType = {
    id: string | null
    season: string | null
    temperatureInfo: string | null
    description: string | null
    itemsToPack: string | null
    considerations: string | null
  }

  export type WeatherInfoCountAggregateOutputType = {
    id: number
    season: number
    temperatureInfo: number
    description: number
    itemsToPack: number
    considerations: number
    _all: number
  }


  export type WeatherInfoMinAggregateInputType = {
    id?: true
    season?: true
    temperatureInfo?: true
    description?: true
    itemsToPack?: true
    considerations?: true
  }

  export type WeatherInfoMaxAggregateInputType = {
    id?: true
    season?: true
    temperatureInfo?: true
    description?: true
    itemsToPack?: true
    considerations?: true
  }

  export type WeatherInfoCountAggregateInputType = {
    id?: true
    season?: true
    temperatureInfo?: true
    description?: true
    itemsToPack?: true
    considerations?: true
    _all?: true
  }

  export type WeatherInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherInfo to aggregate.
     */
    where?: WeatherInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherInfos to fetch.
     */
    orderBy?: WeatherInfoOrderByWithRelationInput | WeatherInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherInfos
    **/
    _count?: true | WeatherInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherInfoMaxAggregateInputType
  }

  export type GetWeatherInfoAggregateType<T extends WeatherInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherInfo[P]>
      : GetScalarType<T[P], AggregateWeatherInfo[P]>
  }




  export type WeatherInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherInfoWhereInput
    orderBy?: WeatherInfoOrderByWithAggregationInput | WeatherInfoOrderByWithAggregationInput[]
    by: WeatherInfoScalarFieldEnum[] | WeatherInfoScalarFieldEnum
    having?: WeatherInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherInfoCountAggregateInputType | true
    _min?: WeatherInfoMinAggregateInputType
    _max?: WeatherInfoMaxAggregateInputType
  }

  export type WeatherInfoGroupByOutputType = {
    id: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack: string | null
    considerations: string | null
    _count: WeatherInfoCountAggregateOutputType | null
    _min: WeatherInfoMinAggregateOutputType | null
    _max: WeatherInfoMaxAggregateOutputType | null
  }

  type GetWeatherInfoGroupByPayload<T extends WeatherInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherInfoGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherInfoGroupByOutputType[P]>
        }
      >
    >


  export type WeatherInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    temperatureInfo?: boolean
    description?: boolean
    itemsToPack?: boolean
    considerations?: boolean
    Trip?: boolean | WeatherInfo$TripArgs<ExtArgs>
  }, ExtArgs["result"]["weatherInfo"]>

  export type WeatherInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    temperatureInfo?: boolean
    description?: boolean
    itemsToPack?: boolean
    considerations?: boolean
  }, ExtArgs["result"]["weatherInfo"]>

  export type WeatherInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    temperatureInfo?: boolean
    description?: boolean
    itemsToPack?: boolean
    considerations?: boolean
  }, ExtArgs["result"]["weatherInfo"]>

  export type WeatherInfoSelectScalar = {
    id?: boolean
    season?: boolean
    temperatureInfo?: boolean
    description?: boolean
    itemsToPack?: boolean
    considerations?: boolean
  }

  export type WeatherInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "temperatureInfo" | "description" | "itemsToPack" | "considerations", ExtArgs["result"]["weatherInfo"]>
  export type WeatherInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trip?: boolean | WeatherInfo$TripArgs<ExtArgs>
  }
  export type WeatherInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeatherInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeatherInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherInfo"
    objects: {
      Trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      season: string
      temperatureInfo: string
      description: string
      itemsToPack: string | null
      considerations: string | null
    }, ExtArgs["result"]["weatherInfo"]>
    composites: {}
  }

  type WeatherInfoGetPayload<S extends boolean | null | undefined | WeatherInfoDefaultArgs> = $Result.GetResult<Prisma.$WeatherInfoPayload, S>

  type WeatherInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherInfoCountAggregateInputType | true
    }

  export interface WeatherInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherInfo'], meta: { name: 'WeatherInfo' } }
    /**
     * Find zero or one WeatherInfo that matches the filter.
     * @param {WeatherInfoFindUniqueArgs} args - Arguments to find a WeatherInfo
     * @example
     * // Get one WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherInfoFindUniqueArgs>(args: SelectSubset<T, WeatherInfoFindUniqueArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherInfoFindUniqueOrThrowArgs} args - Arguments to find a WeatherInfo
     * @example
     * // Get one WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoFindFirstArgs} args - Arguments to find a WeatherInfo
     * @example
     * // Get one WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherInfoFindFirstArgs>(args?: SelectSubset<T, WeatherInfoFindFirstArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoFindFirstOrThrowArgs} args - Arguments to find a WeatherInfo
     * @example
     * // Get one WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherInfos
     * const weatherInfos = await prisma.weatherInfo.findMany()
     * 
     * // Get first 10 WeatherInfos
     * const weatherInfos = await prisma.weatherInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherInfoWithIdOnly = await prisma.weatherInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherInfoFindManyArgs>(args?: SelectSubset<T, WeatherInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherInfo.
     * @param {WeatherInfoCreateArgs} args - Arguments to create a WeatherInfo.
     * @example
     * // Create one WeatherInfo
     * const WeatherInfo = await prisma.weatherInfo.create({
     *   data: {
     *     // ... data to create a WeatherInfo
     *   }
     * })
     * 
     */
    create<T extends WeatherInfoCreateArgs>(args: SelectSubset<T, WeatherInfoCreateArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherInfos.
     * @param {WeatherInfoCreateManyArgs} args - Arguments to create many WeatherInfos.
     * @example
     * // Create many WeatherInfos
     * const weatherInfo = await prisma.weatherInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherInfoCreateManyArgs>(args?: SelectSubset<T, WeatherInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeatherInfos and returns the data saved in the database.
     * @param {WeatherInfoCreateManyAndReturnArgs} args - Arguments to create many WeatherInfos.
     * @example
     * // Create many WeatherInfos
     * const weatherInfo = await prisma.weatherInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeatherInfos and only return the `id`
     * const weatherInfoWithIdOnly = await prisma.weatherInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeatherInfo.
     * @param {WeatherInfoDeleteArgs} args - Arguments to delete one WeatherInfo.
     * @example
     * // Delete one WeatherInfo
     * const WeatherInfo = await prisma.weatherInfo.delete({
     *   where: {
     *     // ... filter to delete one WeatherInfo
     *   }
     * })
     * 
     */
    delete<T extends WeatherInfoDeleteArgs>(args: SelectSubset<T, WeatherInfoDeleteArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherInfo.
     * @param {WeatherInfoUpdateArgs} args - Arguments to update one WeatherInfo.
     * @example
     * // Update one WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherInfoUpdateArgs>(args: SelectSubset<T, WeatherInfoUpdateArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherInfos.
     * @param {WeatherInfoDeleteManyArgs} args - Arguments to filter WeatherInfos to delete.
     * @example
     * // Delete a few WeatherInfos
     * const { count } = await prisma.weatherInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherInfoDeleteManyArgs>(args?: SelectSubset<T, WeatherInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherInfos
     * const weatherInfo = await prisma.weatherInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherInfoUpdateManyArgs>(args: SelectSubset<T, WeatherInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherInfos and returns the data updated in the database.
     * @param {WeatherInfoUpdateManyAndReturnArgs} args - Arguments to update many WeatherInfos.
     * @example
     * // Update many WeatherInfos
     * const weatherInfo = await prisma.weatherInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeatherInfos and only return the `id`
     * const weatherInfoWithIdOnly = await prisma.weatherInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeatherInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeatherInfo.
     * @param {WeatherInfoUpsertArgs} args - Arguments to update or create a WeatherInfo.
     * @example
     * // Update or create a WeatherInfo
     * const weatherInfo = await prisma.weatherInfo.upsert({
     *   create: {
     *     // ... data to create a WeatherInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherInfo we want to update
     *   }
     * })
     */
    upsert<T extends WeatherInfoUpsertArgs>(args: SelectSubset<T, WeatherInfoUpsertArgs<ExtArgs>>): Prisma__WeatherInfoClient<$Result.GetResult<Prisma.$WeatherInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoCountArgs} args - Arguments to filter WeatherInfos to count.
     * @example
     * // Count the number of WeatherInfos
     * const count = await prisma.weatherInfo.count({
     *   where: {
     *     // ... the filter for the WeatherInfos we want to count
     *   }
     * })
    **/
    count<T extends WeatherInfoCountArgs>(
      args?: Subset<T, WeatherInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherInfoAggregateArgs>(args: Subset<T, WeatherInfoAggregateArgs>): Prisma.PrismaPromise<GetWeatherInfoAggregateType<T>>

    /**
     * Group by WeatherInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherInfoGroupByArgs['orderBy'] }
        : { orderBy?: WeatherInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherInfo model
   */
  readonly fields: WeatherInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Trip<T extends WeatherInfo$TripArgs<ExtArgs> = {}>(args?: Subset<T, WeatherInfo$TripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeatherInfo model
   */
  interface WeatherInfoFieldRefs {
    readonly id: FieldRef<"WeatherInfo", 'String'>
    readonly season: FieldRef<"WeatherInfo", 'String'>
    readonly temperatureInfo: FieldRef<"WeatherInfo", 'String'>
    readonly description: FieldRef<"WeatherInfo", 'String'>
    readonly itemsToPack: FieldRef<"WeatherInfo", 'String'>
    readonly considerations: FieldRef<"WeatherInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeatherInfo findUnique
   */
  export type WeatherInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter, which WeatherInfo to fetch.
     */
    where: WeatherInfoWhereUniqueInput
  }

  /**
   * WeatherInfo findUniqueOrThrow
   */
  export type WeatherInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter, which WeatherInfo to fetch.
     */
    where: WeatherInfoWhereUniqueInput
  }

  /**
   * WeatherInfo findFirst
   */
  export type WeatherInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter, which WeatherInfo to fetch.
     */
    where?: WeatherInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherInfos to fetch.
     */
    orderBy?: WeatherInfoOrderByWithRelationInput | WeatherInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherInfos.
     */
    cursor?: WeatherInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherInfos.
     */
    distinct?: WeatherInfoScalarFieldEnum | WeatherInfoScalarFieldEnum[]
  }

  /**
   * WeatherInfo findFirstOrThrow
   */
  export type WeatherInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter, which WeatherInfo to fetch.
     */
    where?: WeatherInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherInfos to fetch.
     */
    orderBy?: WeatherInfoOrderByWithRelationInput | WeatherInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherInfos.
     */
    cursor?: WeatherInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherInfos.
     */
    distinct?: WeatherInfoScalarFieldEnum | WeatherInfoScalarFieldEnum[]
  }

  /**
   * WeatherInfo findMany
   */
  export type WeatherInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter, which WeatherInfos to fetch.
     */
    where?: WeatherInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherInfos to fetch.
     */
    orderBy?: WeatherInfoOrderByWithRelationInput | WeatherInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherInfos.
     */
    cursor?: WeatherInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherInfos.
     */
    skip?: number
    distinct?: WeatherInfoScalarFieldEnum | WeatherInfoScalarFieldEnum[]
  }

  /**
   * WeatherInfo create
   */
  export type WeatherInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a WeatherInfo.
     */
    data: XOR<WeatherInfoCreateInput, WeatherInfoUncheckedCreateInput>
  }

  /**
   * WeatherInfo createMany
   */
  export type WeatherInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherInfos.
     */
    data: WeatherInfoCreateManyInput | WeatherInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherInfo createManyAndReturn
   */
  export type WeatherInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * The data used to create many WeatherInfos.
     */
    data: WeatherInfoCreateManyInput | WeatherInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherInfo update
   */
  export type WeatherInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a WeatherInfo.
     */
    data: XOR<WeatherInfoUpdateInput, WeatherInfoUncheckedUpdateInput>
    /**
     * Choose, which WeatherInfo to update.
     */
    where: WeatherInfoWhereUniqueInput
  }

  /**
   * WeatherInfo updateMany
   */
  export type WeatherInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherInfos.
     */
    data: XOR<WeatherInfoUpdateManyMutationInput, WeatherInfoUncheckedUpdateManyInput>
    /**
     * Filter which WeatherInfos to update
     */
    where?: WeatherInfoWhereInput
    /**
     * Limit how many WeatherInfos to update.
     */
    limit?: number
  }

  /**
   * WeatherInfo updateManyAndReturn
   */
  export type WeatherInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * The data used to update WeatherInfos.
     */
    data: XOR<WeatherInfoUpdateManyMutationInput, WeatherInfoUncheckedUpdateManyInput>
    /**
     * Filter which WeatherInfos to update
     */
    where?: WeatherInfoWhereInput
    /**
     * Limit how many WeatherInfos to update.
     */
    limit?: number
  }

  /**
   * WeatherInfo upsert
   */
  export type WeatherInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the WeatherInfo to update in case it exists.
     */
    where: WeatherInfoWhereUniqueInput
    /**
     * In case the WeatherInfo found by the `where` argument doesn't exist, create a new WeatherInfo with this data.
     */
    create: XOR<WeatherInfoCreateInput, WeatherInfoUncheckedCreateInput>
    /**
     * In case the WeatherInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherInfoUpdateInput, WeatherInfoUncheckedUpdateInput>
  }

  /**
   * WeatherInfo delete
   */
  export type WeatherInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
    /**
     * Filter which WeatherInfo to delete.
     */
    where: WeatherInfoWhereUniqueInput
  }

  /**
   * WeatherInfo deleteMany
   */
  export type WeatherInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherInfos to delete
     */
    where?: WeatherInfoWhereInput
    /**
     * Limit how many WeatherInfos to delete.
     */
    limit?: number
  }

  /**
   * WeatherInfo.Trip
   */
  export type WeatherInfo$TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * WeatherInfo without action
   */
  export type WeatherInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherInfo
     */
    select?: WeatherInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherInfo
     */
    omit?: WeatherInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInfoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    imageUrl: 'imageUrl',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    imageUrl: 'imageUrl',
    budget: 'budget',
    startDate: 'startDate',
    endDate: 'endDate',
    daysCount: 'daysCount',
    createdAt: 'createdAt',
    weatherInfoid: 'weatherInfoid',
    isDraft: 'isDraft'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripDayScalarFieldEnum: {
    id: 'id',
    title: 'title',
    tripId: 'tripId',
    dayIndex: 'dayIndex',
    date: 'date',
    morning: 'morning',
    morningTitle: 'morningTitle',
    afternoon: 'afternoon',
    afternoonTitle: 'afternoonTitle',
    evening: 'evening',
    eveningTitle: 'eveningTitle'
  };

  export type TripDayScalarFieldEnum = (typeof TripDayScalarFieldEnum)[keyof typeof TripDayScalarFieldEnum]


  export const WeatherInfoScalarFieldEnum: {
    id: 'id',
    season: 'season',
    temperatureInfo: 'temperatureInfo',
    description: 'description',
    itemsToPack: 'itemsToPack',
    considerations: 'considerations'
  };

  export type WeatherInfoScalarFieldEnum = (typeof WeatherInfoScalarFieldEnum)[keyof typeof WeatherInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type appUserWhereInput = {
    AND?: appUserWhereInput | appUserWhereInput[]
    OR?: appUserWhereInput[]
    NOT?: appUserWhereInput | appUserWhereInput[]
    id?: StringFilter<"appUser"> | string
    email?: StringFilter<"appUser"> | string
    imageUrl?: StringFilter<"appUser"> | string
    CreatedAt?: DateTimeFilter<"appUser"> | Date | string
    UpdatedAt?: DateTimeFilter<"appUser"> | Date | string
  }

  export type appUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type appUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: appUserWhereInput | appUserWhereInput[]
    OR?: appUserWhereInput[]
    NOT?: appUserWhereInput | appUserWhereInput[]
    imageUrl?: StringFilter<"appUser"> | string
    CreatedAt?: DateTimeFilter<"appUser"> | Date | string
    UpdatedAt?: DateTimeFilter<"appUser"> | Date | string
  }, "id" | "email">

  export type appUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: appUserCountOrderByAggregateInput
    _max?: appUserMaxOrderByAggregateInput
    _min?: appUserMinOrderByAggregateInput
  }

  export type appUserScalarWhereWithAggregatesInput = {
    AND?: appUserScalarWhereWithAggregatesInput | appUserScalarWhereWithAggregatesInput[]
    OR?: appUserScalarWhereWithAggregatesInput[]
    NOT?: appUserScalarWhereWithAggregatesInput | appUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"appUser"> | string
    email?: StringWithAggregatesFilter<"appUser"> | string
    imageUrl?: StringWithAggregatesFilter<"appUser"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"appUser"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"appUser"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    location?: StringFilter<"Trip"> | string
    imageUrl?: StringNullableFilter<"Trip"> | string | null
    budget?: IntFilter<"Trip"> | number
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    daysCount?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    weatherInfoid?: StringFilter<"Trip"> | string
    isDraft?: BoolFilter<"Trip"> | boolean
    days?: TripDayListRelationFilter
    weatherInfo?: XOR<WeatherInfoScalarRelationFilter, WeatherInfoWhereInput>
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    budget?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    daysCount?: SortOrder
    createdAt?: SortOrder
    weatherInfoid?: SortOrder
    isDraft?: SortOrder
    days?: TripDayOrderByRelationAggregateInput
    weatherInfo?: WeatherInfoOrderByWithRelationInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weatherInfoid?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    title?: StringFilter<"Trip"> | string
    location?: StringFilter<"Trip"> | string
    imageUrl?: StringNullableFilter<"Trip"> | string | null
    budget?: IntFilter<"Trip"> | number
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    daysCount?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    isDraft?: BoolFilter<"Trip"> | boolean
    days?: TripDayListRelationFilter
    weatherInfo?: XOR<WeatherInfoScalarRelationFilter, WeatherInfoWhereInput>
  }, "id" | "weatherInfoid">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    budget?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    daysCount?: SortOrder
    createdAt?: SortOrder
    weatherInfoid?: SortOrder
    isDraft?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    location?: StringWithAggregatesFilter<"Trip"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    budget?: IntWithAggregatesFilter<"Trip"> | number
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    daysCount?: IntWithAggregatesFilter<"Trip"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    weatherInfoid?: StringWithAggregatesFilter<"Trip"> | string
    isDraft?: BoolWithAggregatesFilter<"Trip"> | boolean
  }

  export type TripDayWhereInput = {
    AND?: TripDayWhereInput | TripDayWhereInput[]
    OR?: TripDayWhereInput[]
    NOT?: TripDayWhereInput | TripDayWhereInput[]
    id?: StringFilter<"TripDay"> | string
    title?: StringFilter<"TripDay"> | string
    tripId?: StringFilter<"TripDay"> | string
    dayIndex?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    morning?: StringNullableFilter<"TripDay"> | string | null
    morningTitle?: StringNullableFilter<"TripDay"> | string | null
    afternoon?: StringNullableFilter<"TripDay"> | string | null
    afternoonTitle?: StringNullableFilter<"TripDay"> | string | null
    evening?: StringNullableFilter<"TripDay"> | string | null
    eveningTitle?: StringNullableFilter<"TripDay"> | string | null
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripDayOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    tripId?: SortOrder
    dayIndex?: SortOrder
    date?: SortOrder
    morning?: SortOrderInput | SortOrder
    morningTitle?: SortOrderInput | SortOrder
    afternoon?: SortOrderInput | SortOrder
    afternoonTitle?: SortOrderInput | SortOrder
    evening?: SortOrderInput | SortOrder
    eveningTitle?: SortOrderInput | SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripDayWhereInput | TripDayWhereInput[]
    OR?: TripDayWhereInput[]
    NOT?: TripDayWhereInput | TripDayWhereInput[]
    title?: StringFilter<"TripDay"> | string
    tripId?: StringFilter<"TripDay"> | string
    dayIndex?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    morning?: StringNullableFilter<"TripDay"> | string | null
    morningTitle?: StringNullableFilter<"TripDay"> | string | null
    afternoon?: StringNullableFilter<"TripDay"> | string | null
    afternoonTitle?: StringNullableFilter<"TripDay"> | string | null
    evening?: StringNullableFilter<"TripDay"> | string | null
    eveningTitle?: StringNullableFilter<"TripDay"> | string | null
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TripDayOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    tripId?: SortOrder
    dayIndex?: SortOrder
    date?: SortOrder
    morning?: SortOrderInput | SortOrder
    morningTitle?: SortOrderInput | SortOrder
    afternoon?: SortOrderInput | SortOrder
    afternoonTitle?: SortOrderInput | SortOrder
    evening?: SortOrderInput | SortOrder
    eveningTitle?: SortOrderInput | SortOrder
    _count?: TripDayCountOrderByAggregateInput
    _avg?: TripDayAvgOrderByAggregateInput
    _max?: TripDayMaxOrderByAggregateInput
    _min?: TripDayMinOrderByAggregateInput
    _sum?: TripDaySumOrderByAggregateInput
  }

  export type TripDayScalarWhereWithAggregatesInput = {
    AND?: TripDayScalarWhereWithAggregatesInput | TripDayScalarWhereWithAggregatesInput[]
    OR?: TripDayScalarWhereWithAggregatesInput[]
    NOT?: TripDayScalarWhereWithAggregatesInput | TripDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripDay"> | string
    title?: StringWithAggregatesFilter<"TripDay"> | string
    tripId?: StringWithAggregatesFilter<"TripDay"> | string
    dayIndex?: IntWithAggregatesFilter<"TripDay"> | number
    date?: DateTimeWithAggregatesFilter<"TripDay"> | Date | string
    morning?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    morningTitle?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    afternoon?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    afternoonTitle?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    evening?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    eveningTitle?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
  }

  export type WeatherInfoWhereInput = {
    AND?: WeatherInfoWhereInput | WeatherInfoWhereInput[]
    OR?: WeatherInfoWhereInput[]
    NOT?: WeatherInfoWhereInput | WeatherInfoWhereInput[]
    id?: StringFilter<"WeatherInfo"> | string
    season?: StringFilter<"WeatherInfo"> | string
    temperatureInfo?: StringFilter<"WeatherInfo"> | string
    description?: StringFilter<"WeatherInfo"> | string
    itemsToPack?: StringNullableFilter<"WeatherInfo"> | string | null
    considerations?: StringNullableFilter<"WeatherInfo"> | string | null
    Trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type WeatherInfoOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    temperatureInfo?: SortOrder
    description?: SortOrder
    itemsToPack?: SortOrderInput | SortOrder
    considerations?: SortOrderInput | SortOrder
    Trip?: TripOrderByWithRelationInput
  }

  export type WeatherInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeatherInfoWhereInput | WeatherInfoWhereInput[]
    OR?: WeatherInfoWhereInput[]
    NOT?: WeatherInfoWhereInput | WeatherInfoWhereInput[]
    season?: StringFilter<"WeatherInfo"> | string
    temperatureInfo?: StringFilter<"WeatherInfo"> | string
    description?: StringFilter<"WeatherInfo"> | string
    itemsToPack?: StringNullableFilter<"WeatherInfo"> | string | null
    considerations?: StringNullableFilter<"WeatherInfo"> | string | null
    Trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id">

  export type WeatherInfoOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    temperatureInfo?: SortOrder
    description?: SortOrder
    itemsToPack?: SortOrderInput | SortOrder
    considerations?: SortOrderInput | SortOrder
    _count?: WeatherInfoCountOrderByAggregateInput
    _max?: WeatherInfoMaxOrderByAggregateInput
    _min?: WeatherInfoMinOrderByAggregateInput
  }

  export type WeatherInfoScalarWhereWithAggregatesInput = {
    AND?: WeatherInfoScalarWhereWithAggregatesInput | WeatherInfoScalarWhereWithAggregatesInput[]
    OR?: WeatherInfoScalarWhereWithAggregatesInput[]
    NOT?: WeatherInfoScalarWhereWithAggregatesInput | WeatherInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeatherInfo"> | string
    season?: StringWithAggregatesFilter<"WeatherInfo"> | string
    temperatureInfo?: StringWithAggregatesFilter<"WeatherInfo"> | string
    description?: StringWithAggregatesFilter<"WeatherInfo"> | string
    itemsToPack?: StringNullableWithAggregatesFilter<"WeatherInfo"> | string | null
    considerations?: StringNullableWithAggregatesFilter<"WeatherInfo"> | string | null
  }

  export type appUserCreateInput = {
    id: string
    email: string
    imageUrl: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type appUserUncheckedCreateInput = {
    id: string
    email: string
    imageUrl: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type appUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appUserCreateManyInput = {
    id: string
    email: string
    imageUrl: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type appUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    isDraft?: boolean
    days?: TripDayCreateNestedManyWithoutTripInput
    weatherInfo: WeatherInfoCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    weatherInfoid: string
    isDraft?: boolean
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    days?: TripDayUpdateManyWithoutTripNestedInput
    weatherInfo?: WeatherInfoUpdateOneRequiredWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherInfoid?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    weatherInfoid: string
    isDraft?: boolean
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherInfoid?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TripDayCreateInput = {
    id?: string
    title: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
    trip: TripCreateNestedOneWithoutDaysInput
  }

  export type TripDayUncheckedCreateInput = {
    id?: string
    title: string
    tripId: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
  }

  export type TripDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutDaysNestedInput
  }

  export type TripDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayCreateManyInput = {
    id?: string
    title: string
    tripId: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
  }

  export type TripDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeatherInfoCreateInput = {
    id?: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack?: string | null
    considerations?: string | null
    Trip?: TripCreateNestedOneWithoutWeatherInfoInput
  }

  export type WeatherInfoUncheckedCreateInput = {
    id?: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack?: string | null
    considerations?: string | null
    Trip?: TripUncheckedCreateNestedOneWithoutWeatherInfoInput
  }

  export type WeatherInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
    Trip?: TripUpdateOneWithoutWeatherInfoNestedInput
  }

  export type WeatherInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
    Trip?: TripUncheckedUpdateOneWithoutWeatherInfoNestedInput
  }

  export type WeatherInfoCreateManyInput = {
    id?: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack?: string | null
    considerations?: string | null
  }

  export type WeatherInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeatherInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type appUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type appUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type appUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TripDayListRelationFilter = {
    every?: TripDayWhereInput
    some?: TripDayWhereInput
    none?: TripDayWhereInput
  }

  export type WeatherInfoScalarRelationFilter = {
    is?: WeatherInfoWhereInput
    isNot?: WeatherInfoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    budget?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    daysCount?: SortOrder
    createdAt?: SortOrder
    weatherInfoid?: SortOrder
    isDraft?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    budget?: SortOrder
    daysCount?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    budget?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    daysCount?: SortOrder
    createdAt?: SortOrder
    weatherInfoid?: SortOrder
    isDraft?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    budget?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    daysCount?: SortOrder
    createdAt?: SortOrder
    weatherInfoid?: SortOrder
    isDraft?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    budget?: SortOrder
    daysCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripDayCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tripId?: SortOrder
    dayIndex?: SortOrder
    date?: SortOrder
    morning?: SortOrder
    morningTitle?: SortOrder
    afternoon?: SortOrder
    afternoonTitle?: SortOrder
    evening?: SortOrder
    eveningTitle?: SortOrder
  }

  export type TripDayAvgOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type TripDayMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tripId?: SortOrder
    dayIndex?: SortOrder
    date?: SortOrder
    morning?: SortOrder
    morningTitle?: SortOrder
    afternoon?: SortOrder
    afternoonTitle?: SortOrder
    evening?: SortOrder
    eveningTitle?: SortOrder
  }

  export type TripDayMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tripId?: SortOrder
    dayIndex?: SortOrder
    date?: SortOrder
    morning?: SortOrder
    morningTitle?: SortOrder
    afternoon?: SortOrder
    afternoonTitle?: SortOrder
    evening?: SortOrder
    eveningTitle?: SortOrder
  }

  export type TripDaySumOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type TripNullableScalarRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type WeatherInfoCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    temperatureInfo?: SortOrder
    description?: SortOrder
    itemsToPack?: SortOrder
    considerations?: SortOrder
  }

  export type WeatherInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    temperatureInfo?: SortOrder
    description?: SortOrder
    itemsToPack?: SortOrder
    considerations?: SortOrder
  }

  export type WeatherInfoMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    temperatureInfo?: SortOrder
    description?: SortOrder
    itemsToPack?: SortOrder
    considerations?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripDayCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
  }

  export type WeatherInfoCreateNestedOneWithoutTripInput = {
    create?: XOR<WeatherInfoCreateWithoutTripInput, WeatherInfoUncheckedCreateWithoutTripInput>
    connectOrCreate?: WeatherInfoCreateOrConnectWithoutTripInput
    connect?: WeatherInfoWhereUniqueInput
  }

  export type TripDayUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TripDayUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    upsert?: TripDayUpsertWithWhereUniqueWithoutTripInput | TripDayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    set?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    disconnect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    delete?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    update?: TripDayUpdateWithWhereUniqueWithoutTripInput | TripDayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDayUpdateManyWithWhereWithoutTripInput | TripDayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
  }

  export type WeatherInfoUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<WeatherInfoCreateWithoutTripInput, WeatherInfoUncheckedCreateWithoutTripInput>
    connectOrCreate?: WeatherInfoCreateOrConnectWithoutTripInput
    upsert?: WeatherInfoUpsertWithoutTripInput
    connect?: WeatherInfoWhereUniqueInput
    update?: XOR<XOR<WeatherInfoUpdateToOneWithWhereWithoutTripInput, WeatherInfoUpdateWithoutTripInput>, WeatherInfoUncheckedUpdateWithoutTripInput>
  }

  export type TripDayUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    upsert?: TripDayUpsertWithWhereUniqueWithoutTripInput | TripDayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    set?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    disconnect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    delete?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    update?: TripDayUpdateWithWhereUniqueWithoutTripInput | TripDayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDayUpdateManyWithWhereWithoutTripInput | TripDayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutDaysInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    upsert?: TripUpsertWithoutDaysInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDaysInput, TripUpdateWithoutDaysInput>, TripUncheckedUpdateWithoutDaysInput>
  }

  export type TripCreateNestedOneWithoutWeatherInfoInput = {
    create?: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
    connectOrCreate?: TripCreateOrConnectWithoutWeatherInfoInput
    connect?: TripWhereUniqueInput
  }

  export type TripUncheckedCreateNestedOneWithoutWeatherInfoInput = {
    create?: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
    connectOrCreate?: TripCreateOrConnectWithoutWeatherInfoInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneWithoutWeatherInfoNestedInput = {
    create?: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
    connectOrCreate?: TripCreateOrConnectWithoutWeatherInfoInput
    upsert?: TripUpsertWithoutWeatherInfoInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutWeatherInfoInput, TripUpdateWithoutWeatherInfoInput>, TripUncheckedUpdateWithoutWeatherInfoInput>
  }

  export type TripUncheckedUpdateOneWithoutWeatherInfoNestedInput = {
    create?: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
    connectOrCreate?: TripCreateOrConnectWithoutWeatherInfoInput
    upsert?: TripUpsertWithoutWeatherInfoInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutWeatherInfoInput, TripUpdateWithoutWeatherInfoInput>, TripUncheckedUpdateWithoutWeatherInfoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TripDayCreateWithoutTripInput = {
    id?: string
    title: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
  }

  export type TripDayUncheckedCreateWithoutTripInput = {
    id?: string
    title: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
  }

  export type TripDayCreateOrConnectWithoutTripInput = {
    where: TripDayWhereUniqueInput
    create: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput>
  }

  export type TripDayCreateManyTripInputEnvelope = {
    data: TripDayCreateManyTripInput | TripDayCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type WeatherInfoCreateWithoutTripInput = {
    id?: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack?: string | null
    considerations?: string | null
  }

  export type WeatherInfoUncheckedCreateWithoutTripInput = {
    id?: string
    season: string
    temperatureInfo: string
    description: string
    itemsToPack?: string | null
    considerations?: string | null
  }

  export type WeatherInfoCreateOrConnectWithoutTripInput = {
    where: WeatherInfoWhereUniqueInput
    create: XOR<WeatherInfoCreateWithoutTripInput, WeatherInfoUncheckedCreateWithoutTripInput>
  }

  export type TripDayUpsertWithWhereUniqueWithoutTripInput = {
    where: TripDayWhereUniqueInput
    update: XOR<TripDayUpdateWithoutTripInput, TripDayUncheckedUpdateWithoutTripInput>
    create: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput>
  }

  export type TripDayUpdateWithWhereUniqueWithoutTripInput = {
    where: TripDayWhereUniqueInput
    data: XOR<TripDayUpdateWithoutTripInput, TripDayUncheckedUpdateWithoutTripInput>
  }

  export type TripDayUpdateManyWithWhereWithoutTripInput = {
    where: TripDayScalarWhereInput
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyWithoutTripInput>
  }

  export type TripDayScalarWhereInput = {
    AND?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
    OR?: TripDayScalarWhereInput[]
    NOT?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
    id?: StringFilter<"TripDay"> | string
    title?: StringFilter<"TripDay"> | string
    tripId?: StringFilter<"TripDay"> | string
    dayIndex?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    morning?: StringNullableFilter<"TripDay"> | string | null
    morningTitle?: StringNullableFilter<"TripDay"> | string | null
    afternoon?: StringNullableFilter<"TripDay"> | string | null
    afternoonTitle?: StringNullableFilter<"TripDay"> | string | null
    evening?: StringNullableFilter<"TripDay"> | string | null
    eveningTitle?: StringNullableFilter<"TripDay"> | string | null
  }

  export type WeatherInfoUpsertWithoutTripInput = {
    update: XOR<WeatherInfoUpdateWithoutTripInput, WeatherInfoUncheckedUpdateWithoutTripInput>
    create: XOR<WeatherInfoCreateWithoutTripInput, WeatherInfoUncheckedCreateWithoutTripInput>
    where?: WeatherInfoWhereInput
  }

  export type WeatherInfoUpdateToOneWithWhereWithoutTripInput = {
    where?: WeatherInfoWhereInput
    data: XOR<WeatherInfoUpdateWithoutTripInput, WeatherInfoUncheckedUpdateWithoutTripInput>
  }

  export type WeatherInfoUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeatherInfoUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    temperatureInfo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    itemsToPack?: NullableStringFieldUpdateOperationsInput | string | null
    considerations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripCreateWithoutDaysInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    isDraft?: boolean
    weatherInfo: WeatherInfoCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDaysInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    weatherInfoid: string
    isDraft?: boolean
  }

  export type TripCreateOrConnectWithoutDaysInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
  }

  export type TripUpsertWithoutDaysInput = {
    update: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDaysInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
  }

  export type TripUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    weatherInfo?: WeatherInfoUpdateOneRequiredWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherInfoid?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TripCreateWithoutWeatherInfoInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    isDraft?: boolean
    days?: TripDayCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutWeatherInfoInput = {
    id?: string
    title: string
    location: string
    imageUrl?: string | null
    budget?: number
    startDate: Date | string
    endDate: Date | string
    daysCount?: number
    createdAt?: Date | string
    isDraft?: boolean
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutWeatherInfoInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
  }

  export type TripUpsertWithoutWeatherInfoInput = {
    update: XOR<TripUpdateWithoutWeatherInfoInput, TripUncheckedUpdateWithoutWeatherInfoInput>
    create: XOR<TripCreateWithoutWeatherInfoInput, TripUncheckedCreateWithoutWeatherInfoInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutWeatherInfoInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutWeatherInfoInput, TripUncheckedUpdateWithoutWeatherInfoInput>
  }

  export type TripUpdateWithoutWeatherInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    days?: TripDayUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutWeatherInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripDayCreateManyTripInput = {
    id?: string
    title: string
    dayIndex: number
    date: Date | string
    morning?: string | null
    morningTitle?: string | null
    afternoon?: string | null
    afternoonTitle?: string | null
    evening?: string | null
    eveningTitle?: string | null
  }

  export type TripDayUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    morning?: NullableStringFieldUpdateOperationsInput | string | null
    morningTitle?: NullableStringFieldUpdateOperationsInput | string | null
    afternoon?: NullableStringFieldUpdateOperationsInput | string | null
    afternoonTitle?: NullableStringFieldUpdateOperationsInput | string | null
    evening?: NullableStringFieldUpdateOperationsInput | string | null
    eveningTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}