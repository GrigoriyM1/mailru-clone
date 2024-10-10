
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Additional
 * 
 */
export type Additional = $Result.DefaultSelection<Prisma.$AdditionalPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.additional`: Exposes CRUD operations for the **Additional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Additionals
    * const additionals = await prisma.additional.findMany()
    * ```
    */
  get additional(): Prisma.AdditionalDelegate<ExtArgs>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Question: 'Question',
    Additional: 'Additional',
    Answer: 'Answer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "question" | "additional" | "answer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Additional: {
        payload: Prisma.$AdditionalPayload<ExtArgs>
        fields: Prisma.AdditionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdditionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdditionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          findFirst: {
            args: Prisma.AdditionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdditionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          findMany: {
            args: Prisma.AdditionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>[]
          }
          create: {
            args: Prisma.AdditionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          createMany: {
            args: Prisma.AdditionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdditionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>[]
          }
          delete: {
            args: Prisma.AdditionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          update: {
            args: Prisma.AdditionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          deleteMany: {
            args: Prisma.AdditionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdditionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdditionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalPayload>
          }
          aggregate: {
            args: Prisma.AdditionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdditional>
          }
          groupBy: {
            args: Prisma.AdditionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdditionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdditionalCountArgs<ExtArgs>
            result: $Utils.Optional<AdditionalCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    questions: number
    likedQuestions: number
    answers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    likedQuestions?: boolean | UserCountOutputTypeCountLikedQuestionsArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    likedBy: number
    additionals: number
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedBy?: boolean | QuestionCountOutputTypeCountLikedByArgs
    additionals?: boolean | QuestionCountOutputTypeCountAdditionalsArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAdditionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    lastName: string | null
    email: string | null
    linkedEmail: string | null
    password: string | null
    avatar: string | null
    phone: string | null
    birthdate: string | null
    gender: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    lastName: string | null
    email: string | null
    linkedEmail: string | null
    password: string | null
    avatar: string | null
    phone: string | null
    birthdate: string | null
    gender: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    lastName: number
    email: number
    linkedEmail: number
    password: number
    avatar: number
    phone: number
    birthdate: number
    gender: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    lastName?: true
    email?: true
    linkedEmail?: true
    password?: true
    avatar?: true
    phone?: true
    birthdate?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    lastName?: true
    email?: true
    linkedEmail?: true
    password?: true
    avatar?: true
    phone?: true
    birthdate?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    lastName?: true
    email?: true
    linkedEmail?: true
    password?: true
    avatar?: true
    phone?: true
    birthdate?: true
    gender?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar: string | null
    phone: string
    birthdate: string
    gender: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    linkedEmail?: boolean
    password?: boolean
    avatar?: boolean
    phone?: boolean
    birthdate?: boolean
    gender?: boolean
    questions?: boolean | User$questionsArgs<ExtArgs>
    likedQuestions?: boolean | User$likedQuestionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    linkedEmail?: boolean
    password?: boolean
    avatar?: boolean
    phone?: boolean
    birthdate?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    linkedEmail?: boolean
    password?: boolean
    avatar?: boolean
    phone?: boolean
    birthdate?: boolean
    gender?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | User$questionsArgs<ExtArgs>
    likedQuestions?: boolean | User$likedQuestionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      likedQuestions: Prisma.$QuestionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      lastName: string
      email: string
      linkedEmail: string
      password: string
      avatar: string | null
      phone: string
      birthdate: string
      gender: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    likedQuestions<T extends User$likedQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly linkedEmail: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.likedQuestions
   */
  export type User$likedQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    likes: number | null
  }

  export type QuestionSumAggregateOutputType = {
    likes: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeText: string | null
    text: string | null
    category: string | null
    subcategory: string | null
    likes: number | null
    isLeader: boolean | null
    userId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeText: string | null
    text: string | null
    category: string | null
    subcategory: string | null
    likes: number | null
    isLeader: boolean | null
    userId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    themeText: number
    text: number
    category: number
    subcategory: number
    likes: number
    isLeader: number
    userId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    likes?: true
  }

  export type QuestionSumAggregateInputType = {
    likes?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    themeText?: true
    text?: true
    category?: true
    subcategory?: true
    likes?: true
    isLeader?: true
    userId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    themeText?: true
    text?: true
    category?: true
    subcategory?: true
    likes?: true
    isLeader?: true
    userId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    themeText?: true
    text?: true
    category?: true
    subcategory?: true
    likes?: true
    isLeader?: true
    userId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    themeText: string
    text: string | null
    category: string
    subcategory: string
    likes: number | null
    isLeader: boolean | null
    userId: string | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeText?: boolean
    text?: boolean
    category?: boolean
    subcategory?: boolean
    likes?: boolean
    isLeader?: boolean
    userId?: boolean
    likedBy?: boolean | Question$likedByArgs<ExtArgs>
    additionals?: boolean | Question$additionalsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    user?: boolean | Question$userArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeText?: boolean
    text?: boolean
    category?: boolean
    subcategory?: boolean
    likes?: boolean
    isLeader?: boolean
    userId?: boolean
    user?: boolean | Question$userArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeText?: boolean
    text?: boolean
    category?: boolean
    subcategory?: boolean
    likes?: boolean
    isLeader?: boolean
    userId?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedBy?: boolean | Question$likedByArgs<ExtArgs>
    additionals?: boolean | Question$additionalsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    user?: boolean | Question$userArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Question$userArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      likedBy: Prisma.$UserPayload<ExtArgs>[]
      additionals: Prisma.$AdditionalPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      themeText: string
      text: string | null
      category: string
      subcategory: string
      likes: number | null
      isLeader: boolean | null
      userId: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likedBy<T extends Question$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Question$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    additionals<T extends Question$additionalsArgs<ExtArgs> = {}>(args?: Subset<T, Question$additionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findMany"> | Null>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends Question$userArgs<ExtArgs> = {}>(args?: Subset<T, Question$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly themeText: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly category: FieldRef<"Question", 'String'>
    readonly subcategory: FieldRef<"Question", 'String'>
    readonly likes: FieldRef<"Question", 'Int'>
    readonly isLeader: FieldRef<"Question", 'Boolean'>
    readonly userId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.likedBy
   */
  export type Question$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Question.additionals
   */
  export type Question$additionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    where?: AdditionalWhereInput
    orderBy?: AdditionalOrderByWithRelationInput | AdditionalOrderByWithRelationInput[]
    cursor?: AdditionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdditionalScalarFieldEnum | AdditionalScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.user
   */
  export type Question$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Additional
   */

  export type AggregateAdditional = {
    _count: AdditionalCountAggregateOutputType | null
    _min: AdditionalMinAggregateOutputType | null
    _max: AdditionalMaxAggregateOutputType | null
  }

  export type AdditionalMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    questionId: string | null
    text: string | null
  }

  export type AdditionalMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    questionId: string | null
    text: string | null
  }

  export type AdditionalCountAggregateOutputType = {
    id: number
    createdAt: number
    questionId: number
    text: number
    _all: number
  }


  export type AdditionalMinAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    text?: true
  }

  export type AdditionalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    text?: true
  }

  export type AdditionalCountAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    text?: true
    _all?: true
  }

  export type AdditionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Additional to aggregate.
     */
    where?: AdditionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Additionals to fetch.
     */
    orderBy?: AdditionalOrderByWithRelationInput | AdditionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdditionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Additionals
    **/
    _count?: true | AdditionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdditionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdditionalMaxAggregateInputType
  }

  export type GetAdditionalAggregateType<T extends AdditionalAggregateArgs> = {
        [P in keyof T & keyof AggregateAdditional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdditional[P]>
      : GetScalarType<T[P], AggregateAdditional[P]>
  }




  export type AdditionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalWhereInput
    orderBy?: AdditionalOrderByWithAggregationInput | AdditionalOrderByWithAggregationInput[]
    by: AdditionalScalarFieldEnum[] | AdditionalScalarFieldEnum
    having?: AdditionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdditionalCountAggregateInputType | true
    _min?: AdditionalMinAggregateInputType
    _max?: AdditionalMaxAggregateInputType
  }

  export type AdditionalGroupByOutputType = {
    id: string
    createdAt: Date
    questionId: string
    text: string
    _count: AdditionalCountAggregateOutputType | null
    _min: AdditionalMinAggregateOutputType | null
    _max: AdditionalMaxAggregateOutputType | null
  }

  type GetAdditionalGroupByPayload<T extends AdditionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdditionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdditionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdditionalGroupByOutputType[P]>
            : GetScalarType<T[P], AdditionalGroupByOutputType[P]>
        }
      >
    >


  export type AdditionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    text?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additional"]>

  export type AdditionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    text?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additional"]>

  export type AdditionalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    text?: boolean
  }

  export type AdditionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AdditionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AdditionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Additional"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      questionId: string
      text: string
    }, ExtArgs["result"]["additional"]>
    composites: {}
  }

  type AdditionalGetPayload<S extends boolean | null | undefined | AdditionalDefaultArgs> = $Result.GetResult<Prisma.$AdditionalPayload, S>

  type AdditionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdditionalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdditionalCountAggregateInputType | true
    }

  export interface AdditionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Additional'], meta: { name: 'Additional' } }
    /**
     * Find zero or one Additional that matches the filter.
     * @param {AdditionalFindUniqueArgs} args - Arguments to find a Additional
     * @example
     * // Get one Additional
     * const additional = await prisma.additional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdditionalFindUniqueArgs>(args: SelectSubset<T, AdditionalFindUniqueArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Additional that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdditionalFindUniqueOrThrowArgs} args - Arguments to find a Additional
     * @example
     * // Get one Additional
     * const additional = await prisma.additional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdditionalFindUniqueOrThrowArgs>(args: SelectSubset<T, AdditionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Additional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalFindFirstArgs} args - Arguments to find a Additional
     * @example
     * // Get one Additional
     * const additional = await prisma.additional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdditionalFindFirstArgs>(args?: SelectSubset<T, AdditionalFindFirstArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Additional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalFindFirstOrThrowArgs} args - Arguments to find a Additional
     * @example
     * // Get one Additional
     * const additional = await prisma.additional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdditionalFindFirstOrThrowArgs>(args?: SelectSubset<T, AdditionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Additionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Additionals
     * const additionals = await prisma.additional.findMany()
     * 
     * // Get first 10 Additionals
     * const additionals = await prisma.additional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const additionalWithIdOnly = await prisma.additional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdditionalFindManyArgs>(args?: SelectSubset<T, AdditionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Additional.
     * @param {AdditionalCreateArgs} args - Arguments to create a Additional.
     * @example
     * // Create one Additional
     * const Additional = await prisma.additional.create({
     *   data: {
     *     // ... data to create a Additional
     *   }
     * })
     * 
     */
    create<T extends AdditionalCreateArgs>(args: SelectSubset<T, AdditionalCreateArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Additionals.
     * @param {AdditionalCreateManyArgs} args - Arguments to create many Additionals.
     * @example
     * // Create many Additionals
     * const additional = await prisma.additional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdditionalCreateManyArgs>(args?: SelectSubset<T, AdditionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Additionals and returns the data saved in the database.
     * @param {AdditionalCreateManyAndReturnArgs} args - Arguments to create many Additionals.
     * @example
     * // Create many Additionals
     * const additional = await prisma.additional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Additionals and only return the `id`
     * const additionalWithIdOnly = await prisma.additional.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdditionalCreateManyAndReturnArgs>(args?: SelectSubset<T, AdditionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Additional.
     * @param {AdditionalDeleteArgs} args - Arguments to delete one Additional.
     * @example
     * // Delete one Additional
     * const Additional = await prisma.additional.delete({
     *   where: {
     *     // ... filter to delete one Additional
     *   }
     * })
     * 
     */
    delete<T extends AdditionalDeleteArgs>(args: SelectSubset<T, AdditionalDeleteArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Additional.
     * @param {AdditionalUpdateArgs} args - Arguments to update one Additional.
     * @example
     * // Update one Additional
     * const additional = await prisma.additional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdditionalUpdateArgs>(args: SelectSubset<T, AdditionalUpdateArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Additionals.
     * @param {AdditionalDeleteManyArgs} args - Arguments to filter Additionals to delete.
     * @example
     * // Delete a few Additionals
     * const { count } = await prisma.additional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdditionalDeleteManyArgs>(args?: SelectSubset<T, AdditionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Additionals
     * const additional = await prisma.additional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdditionalUpdateManyArgs>(args: SelectSubset<T, AdditionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Additional.
     * @param {AdditionalUpsertArgs} args - Arguments to update or create a Additional.
     * @example
     * // Update or create a Additional
     * const additional = await prisma.additional.upsert({
     *   create: {
     *     // ... data to create a Additional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Additional we want to update
     *   }
     * })
     */
    upsert<T extends AdditionalUpsertArgs>(args: SelectSubset<T, AdditionalUpsertArgs<ExtArgs>>): Prisma__AdditionalClient<$Result.GetResult<Prisma.$AdditionalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalCountArgs} args - Arguments to filter Additionals to count.
     * @example
     * // Count the number of Additionals
     * const count = await prisma.additional.count({
     *   where: {
     *     // ... the filter for the Additionals we want to count
     *   }
     * })
    **/
    count<T extends AdditionalCountArgs>(
      args?: Subset<T, AdditionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdditionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdditionalAggregateArgs>(args: Subset<T, AdditionalAggregateArgs>): Prisma.PrismaPromise<GetAdditionalAggregateType<T>>

    /**
     * Group by Additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalGroupByArgs} args - Group by arguments.
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
      T extends AdditionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdditionalGroupByArgs['orderBy'] }
        : { orderBy?: AdditionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdditionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdditionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Additional model
   */
  readonly fields: AdditionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Additional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdditionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Additional model
   */ 
  interface AdditionalFieldRefs {
    readonly id: FieldRef<"Additional", 'String'>
    readonly createdAt: FieldRef<"Additional", 'DateTime'>
    readonly questionId: FieldRef<"Additional", 'String'>
    readonly text: FieldRef<"Additional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Additional findUnique
   */
  export type AdditionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter, which Additional to fetch.
     */
    where: AdditionalWhereUniqueInput
  }

  /**
   * Additional findUniqueOrThrow
   */
  export type AdditionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter, which Additional to fetch.
     */
    where: AdditionalWhereUniqueInput
  }

  /**
   * Additional findFirst
   */
  export type AdditionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter, which Additional to fetch.
     */
    where?: AdditionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Additionals to fetch.
     */
    orderBy?: AdditionalOrderByWithRelationInput | AdditionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Additionals.
     */
    cursor?: AdditionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Additionals.
     */
    distinct?: AdditionalScalarFieldEnum | AdditionalScalarFieldEnum[]
  }

  /**
   * Additional findFirstOrThrow
   */
  export type AdditionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter, which Additional to fetch.
     */
    where?: AdditionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Additionals to fetch.
     */
    orderBy?: AdditionalOrderByWithRelationInput | AdditionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Additionals.
     */
    cursor?: AdditionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Additionals.
     */
    distinct?: AdditionalScalarFieldEnum | AdditionalScalarFieldEnum[]
  }

  /**
   * Additional findMany
   */
  export type AdditionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter, which Additionals to fetch.
     */
    where?: AdditionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Additionals to fetch.
     */
    orderBy?: AdditionalOrderByWithRelationInput | AdditionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Additionals.
     */
    cursor?: AdditionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Additionals.
     */
    skip?: number
    distinct?: AdditionalScalarFieldEnum | AdditionalScalarFieldEnum[]
  }

  /**
   * Additional create
   */
  export type AdditionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Additional.
     */
    data: XOR<AdditionalCreateInput, AdditionalUncheckedCreateInput>
  }

  /**
   * Additional createMany
   */
  export type AdditionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Additionals.
     */
    data: AdditionalCreateManyInput | AdditionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Additional createManyAndReturn
   */
  export type AdditionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Additionals.
     */
    data: AdditionalCreateManyInput | AdditionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Additional update
   */
  export type AdditionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Additional.
     */
    data: XOR<AdditionalUpdateInput, AdditionalUncheckedUpdateInput>
    /**
     * Choose, which Additional to update.
     */
    where: AdditionalWhereUniqueInput
  }

  /**
   * Additional updateMany
   */
  export type AdditionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Additionals.
     */
    data: XOR<AdditionalUpdateManyMutationInput, AdditionalUncheckedUpdateManyInput>
    /**
     * Filter which Additionals to update
     */
    where?: AdditionalWhereInput
  }

  /**
   * Additional upsert
   */
  export type AdditionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Additional to update in case it exists.
     */
    where: AdditionalWhereUniqueInput
    /**
     * In case the Additional found by the `where` argument doesn't exist, create a new Additional with this data.
     */
    create: XOR<AdditionalCreateInput, AdditionalUncheckedCreateInput>
    /**
     * In case the Additional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdditionalUpdateInput, AdditionalUncheckedUpdateInput>
  }

  /**
   * Additional delete
   */
  export type AdditionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
    /**
     * Filter which Additional to delete.
     */
    where: AdditionalWhereUniqueInput
  }

  /**
   * Additional deleteMany
   */
  export type AdditionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Additionals to delete
     */
    where?: AdditionalWhereInput
  }

  /**
   * Additional without action
   */
  export type AdditionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Additional
     */
    select?: AdditionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    likes: number | null
  }

  export type AnswerSumAggregateOutputType = {
    likes: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    likes: number | null
    isBestAnswer: boolean | null
    questionId: string | null
    userId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    likes: number | null
    isBestAnswer: boolean | null
    questionId: string | null
    userId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    likes: number
    isBestAnswer: number
    questionId: number
    userId: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    likes?: true
  }

  export type AnswerSumAggregateInputType = {
    likes?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    likes?: true
    isBestAnswer?: true
    questionId?: true
    userId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    likes?: true
    isBestAnswer?: true
    questionId?: true
    userId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    likes?: true
    isBestAnswer?: true
    questionId?: true
    userId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    text: string
    likes: number | null
    isBestAnswer: boolean | null
    questionId: string | null
    userId: string
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    likes?: boolean
    isBestAnswer?: boolean
    questionId?: boolean
    userId?: boolean
    Question?: boolean | Answer$QuestionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    likes?: boolean
    isBestAnswer?: boolean
    questionId?: boolean
    userId?: boolean
    Question?: boolean | Answer$QuestionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    likes?: boolean
    isBestAnswer?: boolean
    questionId?: boolean
    userId?: boolean
  }

  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | Answer$QuestionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | Answer$QuestionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      Question: Prisma.$QuestionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      text: string
      likes: number | null
      isBestAnswer: boolean | null
      questionId: string | null
      userId: string
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends Answer$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, Answer$QuestionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly likes: FieldRef<"Answer", 'Int'>
    readonly isBestAnswer: FieldRef<"Answer", 'Boolean'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly userId: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer.Question
   */
  export type Answer$QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    linkedEmail: 'linkedEmail',
    password: 'password',
    avatar: 'avatar',
    phone: 'phone',
    birthdate: 'birthdate',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeText: 'themeText',
    text: 'text',
    category: 'category',
    subcategory: 'subcategory',
    likes: 'likes',
    isLeader: 'isLeader',
    userId: 'userId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AdditionalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    questionId: 'questionId',
    text: 'text'
  };

  export type AdditionalScalarFieldEnum = (typeof AdditionalScalarFieldEnum)[keyof typeof AdditionalScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    likes: 'likes',
    isBestAnswer: 'isBestAnswer',
    questionId: 'questionId',
    userId: 'userId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    linkedEmail?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    birthdate?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    questions?: QuestionListRelationFilter
    likedQuestions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    linkedEmail?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    likedQuestions?: QuestionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    linkedEmail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    birthdate?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    questions?: QuestionListRelationFilter
    likedQuestions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
  }, "id" | "email" | "linkedEmail">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    linkedEmail?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    linkedEmail?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    birthdate?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    themeText?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    category?: StringFilter<"Question"> | string
    subcategory?: StringFilter<"Question"> | string
    likes?: IntNullableFilter<"Question"> | number | null
    isLeader?: BoolNullableFilter<"Question"> | boolean | null
    userId?: StringNullableFilter<"Question"> | string | null
    likedBy?: UserListRelationFilter
    additionals?: AdditionalListRelationFilter
    answers?: AnswerListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeText?: SortOrder
    text?: SortOrderInput | SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    likes?: SortOrderInput | SortOrder
    isLeader?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    likedBy?: UserOrderByRelationAggregateInput
    additionals?: AdditionalOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    themeText?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    category?: StringFilter<"Question"> | string
    subcategory?: StringFilter<"Question"> | string
    likes?: IntNullableFilter<"Question"> | number | null
    isLeader?: BoolNullableFilter<"Question"> | boolean | null
    userId?: StringNullableFilter<"Question"> | string | null
    likedBy?: UserListRelationFilter
    additionals?: AdditionalListRelationFilter
    answers?: AnswerListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeText?: SortOrder
    text?: SortOrderInput | SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    likes?: SortOrderInput | SortOrder
    isLeader?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    themeText?: StringWithAggregatesFilter<"Question"> | string
    text?: StringNullableWithAggregatesFilter<"Question"> | string | null
    category?: StringWithAggregatesFilter<"Question"> | string
    subcategory?: StringWithAggregatesFilter<"Question"> | string
    likes?: IntNullableWithAggregatesFilter<"Question"> | number | null
    isLeader?: BoolNullableWithAggregatesFilter<"Question"> | boolean | null
    userId?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type AdditionalWhereInput = {
    AND?: AdditionalWhereInput | AdditionalWhereInput[]
    OR?: AdditionalWhereInput[]
    NOT?: AdditionalWhereInput | AdditionalWhereInput[]
    id?: StringFilter<"Additional"> | string
    createdAt?: DateTimeFilter<"Additional"> | Date | string
    questionId?: StringFilter<"Additional"> | string
    text?: StringFilter<"Additional"> | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }

  export type AdditionalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AdditionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdditionalWhereInput | AdditionalWhereInput[]
    OR?: AdditionalWhereInput[]
    NOT?: AdditionalWhereInput | AdditionalWhereInput[]
    createdAt?: DateTimeFilter<"Additional"> | Date | string
    questionId?: StringFilter<"Additional"> | string
    text?: StringFilter<"Additional"> | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }, "id">

  export type AdditionalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    _count?: AdditionalCountOrderByAggregateInput
    _max?: AdditionalMaxOrderByAggregateInput
    _min?: AdditionalMinOrderByAggregateInput
  }

  export type AdditionalScalarWhereWithAggregatesInput = {
    AND?: AdditionalScalarWhereWithAggregatesInput | AdditionalScalarWhereWithAggregatesInput[]
    OR?: AdditionalScalarWhereWithAggregatesInput[]
    NOT?: AdditionalScalarWhereWithAggregatesInput | AdditionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Additional"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Additional"> | Date | string
    questionId?: StringWithAggregatesFilter<"Additional"> | string
    text?: StringWithAggregatesFilter<"Additional"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    text?: StringFilter<"Answer"> | string
    likes?: IntNullableFilter<"Answer"> | number | null
    isBestAnswer?: BoolNullableFilter<"Answer"> | boolean | null
    questionId?: StringNullableFilter<"Answer"> | string | null
    userId?: StringFilter<"Answer"> | string
    Question?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    likes?: SortOrderInput | SortOrder
    isBestAnswer?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    userId?: SortOrder
    Question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questionId?: AnswerUserIdQuestionIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    text?: StringFilter<"Answer"> | string
    likes?: IntNullableFilter<"Answer"> | number | null
    isBestAnswer?: BoolNullableFilter<"Answer"> | boolean | null
    questionId?: StringNullableFilter<"Answer"> | string | null
    userId?: StringFilter<"Answer"> | string
    Question?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_questionId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    likes?: SortOrderInput | SortOrder
    isBestAnswer?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    text?: StringWithAggregatesFilter<"Answer"> | string
    likes?: IntNullableWithAggregatesFilter<"Answer"> | number | null
    isBestAnswer?: BoolNullableWithAggregatesFilter<"Answer"> | boolean | null
    questionId?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    userId?: StringWithAggregatesFilter<"Answer"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionCreateNestedManyWithoutUserInput
    likedQuestions?: QuestionCreateNestedManyWithoutLikedByInput
    answers?: AnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    likedQuestions?: QuestionUncheckedCreateNestedManyWithoutLikedByInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    likedQuestions?: QuestionUpdateManyWithoutLikedByNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    likedQuestions?: QuestionUncheckedUpdateManyWithoutLikedByNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    likedBy?: UserCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    userId?: string | null
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedBy?: UserUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    likedBy?: UserUncheckedUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    userId?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdditionalCreateInput = {
    id?: string
    createdAt?: Date | string
    text: string
    question: QuestionCreateNestedOneWithoutAdditionalsInput
  }

  export type AdditionalUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    text: string
  }

  export type AdditionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAdditionalsNestedInput
  }

  export type AdditionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalCreateManyInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    text: string
  }

  export type AdditionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    Question?: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    questionId?: string | null
    userId: string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Question?: QuestionUpdateOneWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    questionId?: string | null
    userId: string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    linkedEmail?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    linkedEmail?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    linkedEmail?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AdditionalListRelationFilter = {
    every?: AdditionalWhereInput
    some?: AdditionalWhereInput
    none?: AdditionalWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdditionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeText?: SortOrder
    text?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    likes?: SortOrder
    isLeader?: SortOrder
    userId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeText?: SortOrder
    text?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    likes?: SortOrder
    isLeader?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeText?: SortOrder
    text?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    likes?: SortOrder
    isLeader?: SortOrder
    userId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AdditionalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
  }

  export type AdditionalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
  }

  export type AdditionalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
  }

  export type QuestionNullableRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnswerUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    isBestAnswer?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    isBestAnswer?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    isBestAnswer?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutLikedByInput = {
    create?: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput> | QuestionCreateWithoutLikedByInput[] | QuestionUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLikedByInput | QuestionCreateOrConnectWithoutLikedByInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutLikedByInput = {
    create?: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput> | QuestionCreateWithoutLikedByInput[] | QuestionUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLikedByInput | QuestionCreateOrConnectWithoutLikedByInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput> | QuestionCreateWithoutLikedByInput[] | QuestionUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLikedByInput | QuestionCreateOrConnectWithoutLikedByInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutLikedByInput | QuestionUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutLikedByInput | QuestionUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutLikedByInput | QuestionUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput> | QuestionCreateWithoutLikedByInput[] | QuestionUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLikedByInput | QuestionCreateOrConnectWithoutLikedByInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutLikedByInput | QuestionUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutLikedByInput | QuestionUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutLikedByInput | QuestionUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutLikedQuestionsInput = {
    create?: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput> | UserCreateWithoutLikedQuestionsInput[] | UserUncheckedCreateWithoutLikedQuestionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuestionsInput | UserCreateOrConnectWithoutLikedQuestionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AdditionalCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput> | AdditionalCreateWithoutQuestionInput[] | AdditionalUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AdditionalCreateOrConnectWithoutQuestionInput | AdditionalCreateOrConnectWithoutQuestionInput[]
    createMany?: AdditionalCreateManyQuestionInputEnvelope
    connect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutLikedQuestionsInput = {
    create?: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput> | UserCreateWithoutLikedQuestionsInput[] | UserUncheckedCreateWithoutLikedQuestionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuestionsInput | UserCreateOrConnectWithoutLikedQuestionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AdditionalUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput> | AdditionalCreateWithoutQuestionInput[] | AdditionalUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AdditionalCreateOrConnectWithoutQuestionInput | AdditionalCreateOrConnectWithoutQuestionInput[]
    createMany?: AdditionalCreateManyQuestionInputEnvelope
    connect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateManyWithoutLikedQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput> | UserCreateWithoutLikedQuestionsInput[] | UserUncheckedCreateWithoutLikedQuestionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuestionsInput | UserCreateOrConnectWithoutLikedQuestionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedQuestionsInput | UserUpsertWithWhereUniqueWithoutLikedQuestionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedQuestionsInput | UserUpdateWithWhereUniqueWithoutLikedQuestionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedQuestionsInput | UserUpdateManyWithWhereWithoutLikedQuestionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AdditionalUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput> | AdditionalCreateWithoutQuestionInput[] | AdditionalUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AdditionalCreateOrConnectWithoutQuestionInput | AdditionalCreateOrConnectWithoutQuestionInput[]
    upsert?: AdditionalUpsertWithWhereUniqueWithoutQuestionInput | AdditionalUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AdditionalCreateManyQuestionInputEnvelope
    set?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    disconnect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    delete?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    connect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    update?: AdditionalUpdateWithWhereUniqueWithoutQuestionInput | AdditionalUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AdditionalUpdateManyWithWhereWithoutQuestionInput | AdditionalUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AdditionalScalarWhereInput | AdditionalScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUncheckedUpdateManyWithoutLikedQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput> | UserCreateWithoutLikedQuestionsInput[] | UserUncheckedCreateWithoutLikedQuestionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuestionsInput | UserCreateOrConnectWithoutLikedQuestionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedQuestionsInput | UserUpsertWithWhereUniqueWithoutLikedQuestionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedQuestionsInput | UserUpdateWithWhereUniqueWithoutLikedQuestionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedQuestionsInput | UserUpdateManyWithWhereWithoutLikedQuestionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AdditionalUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput> | AdditionalCreateWithoutQuestionInput[] | AdditionalUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AdditionalCreateOrConnectWithoutQuestionInput | AdditionalCreateOrConnectWithoutQuestionInput[]
    upsert?: AdditionalUpsertWithWhereUniqueWithoutQuestionInput | AdditionalUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AdditionalCreateManyQuestionInputEnvelope
    set?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    disconnect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    delete?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    connect?: AdditionalWhereUniqueInput | AdditionalWhereUniqueInput[]
    update?: AdditionalUpdateWithWhereUniqueWithoutQuestionInput | AdditionalUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AdditionalUpdateManyWithWhereWithoutQuestionInput | AdditionalUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AdditionalScalarWhereInput | AdditionalScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAdditionalsInput = {
    create?: XOR<QuestionCreateWithoutAdditionalsInput, QuestionUncheckedCreateWithoutAdditionalsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAdditionalsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAdditionalsNestedInput = {
    create?: XOR<QuestionCreateWithoutAdditionalsInput, QuestionUncheckedCreateWithoutAdditionalsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAdditionalsInput
    upsert?: QuestionUpsertWithoutAdditionalsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAdditionalsInput, QuestionUpdateWithoutAdditionalsInput>, QuestionUncheckedUpdateWithoutAdditionalsInput>
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type QuestionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    likedBy?: UserCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    additionals?: AdditionalCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    userId?: string | null
    additionals?: AdditionalUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutLikedByInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput>
  }

  export type AnswerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    Question?: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    questionId?: string | null
  }

  export type AnswerCreateOrConnectWithoutUserInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerCreateManyUserInputEnvelope = {
    data: AnswerCreateManyUserInput | AnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    themeText?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    category?: StringFilter<"Question"> | string
    subcategory?: StringFilter<"Question"> | string
    likes?: IntNullableFilter<"Question"> | number | null
    isLeader?: BoolNullableFilter<"Question"> | boolean | null
    userId?: StringNullableFilter<"Question"> | string | null
  }

  export type QuestionUpsertWithWhereUniqueWithoutLikedByInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutLikedByInput, QuestionUncheckedUpdateWithoutLikedByInput>
    create: XOR<QuestionCreateWithoutLikedByInput, QuestionUncheckedCreateWithoutLikedByInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutLikedByInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutLikedByInput, QuestionUncheckedUpdateWithoutLikedByInput>
  }

  export type QuestionUpdateManyWithWhereWithoutLikedByInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutLikedByInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    text?: StringFilter<"Answer"> | string
    likes?: IntNullableFilter<"Answer"> | number | null
    isBestAnswer?: BoolNullableFilter<"Answer"> | boolean | null
    questionId?: StringNullableFilter<"Answer"> | string | null
    userId?: StringFilter<"Answer"> | string
  }

  export type UserCreateWithoutLikedQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput>
  }

  export type AdditionalCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    text: string
  }

  export type AdditionalUncheckedCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    text: string
  }

  export type AdditionalCreateOrConnectWithoutQuestionInput = {
    where: AdditionalWhereUniqueInput
    create: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput>
  }

  export type AdditionalCreateManyQuestionInputEnvelope = {
    data: AdditionalCreateManyQuestionInput | AdditionalCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    userId: string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    likedQuestions?: QuestionCreateNestedManyWithoutLikedByInput
    answers?: AnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    likedQuestions?: QuestionUncheckedCreateNestedManyWithoutLikedByInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLikedQuestionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedQuestionsInput, UserUncheckedUpdateWithoutLikedQuestionsInput>
    create: XOR<UserCreateWithoutLikedQuestionsInput, UserUncheckedCreateWithoutLikedQuestionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedQuestionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedQuestionsInput, UserUncheckedUpdateWithoutLikedQuestionsInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedQuestionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedQuestionsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    linkedEmail?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    birthdate?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
  }

  export type AdditionalUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AdditionalWhereUniqueInput
    update: XOR<AdditionalUpdateWithoutQuestionInput, AdditionalUncheckedUpdateWithoutQuestionInput>
    create: XOR<AdditionalCreateWithoutQuestionInput, AdditionalUncheckedCreateWithoutQuestionInput>
  }

  export type AdditionalUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AdditionalWhereUniqueInput
    data: XOR<AdditionalUpdateWithoutQuestionInput, AdditionalUncheckedUpdateWithoutQuestionInput>
  }

  export type AdditionalUpdateManyWithWhereWithoutQuestionInput = {
    where: AdditionalScalarWhereInput
    data: XOR<AdditionalUpdateManyMutationInput, AdditionalUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AdditionalScalarWhereInput = {
    AND?: AdditionalScalarWhereInput | AdditionalScalarWhereInput[]
    OR?: AdditionalScalarWhereInput[]
    NOT?: AdditionalScalarWhereInput | AdditionalScalarWhereInput[]
    id?: StringFilter<"Additional"> | string
    createdAt?: DateTimeFilter<"Additional"> | Date | string
    questionId?: StringFilter<"Additional"> | string
    text?: StringFilter<"Additional"> | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    likedQuestions?: QuestionUpdateManyWithoutLikedByNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    likedQuestions?: QuestionUncheckedUpdateManyWithoutLikedByNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionCreateWithoutAdditionalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    likedBy?: UserCreateNestedManyWithoutLikedQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAdditionalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    userId?: string | null
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAdditionalsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAdditionalsInput, QuestionUncheckedCreateWithoutAdditionalsInput>
  }

  export type QuestionUpsertWithoutAdditionalsInput = {
    update: XOR<QuestionUpdateWithoutAdditionalsInput, QuestionUncheckedUpdateWithoutAdditionalsInput>
    create: XOR<QuestionCreateWithoutAdditionalsInput, QuestionUncheckedCreateWithoutAdditionalsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAdditionalsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAdditionalsInput, QuestionUncheckedUpdateWithoutAdditionalsInput>
  }

  export type QuestionUpdateWithoutAdditionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedBy?: UserUpdateManyWithoutLikedQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAdditionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    likedBy?: UserUncheckedUpdateManyWithoutLikedQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    likedBy?: UserCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalCreateNestedManyWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
    userId?: string | null
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedQuestionsInput
    additionals?: AdditionalUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionCreateNestedManyWithoutUserInput
    likedQuestions?: QuestionCreateNestedManyWithoutLikedByInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    lastName: string
    email: string
    linkedEmail: string
    password: string
    avatar?: string | null
    phone: string
    birthdate: string
    gender: string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    likedQuestions?: QuestionUncheckedCreateNestedManyWithoutLikedByInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedBy?: UserUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    likedBy?: UserUncheckedUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    likedQuestions?: QuestionUpdateManyWithoutLikedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    likedQuestions?: QuestionUncheckedUpdateManyWithoutLikedByNestedInput
  }

  export type QuestionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeText: string
    text?: string | null
    category: string
    subcategory: string
    likes?: number | null
    isLeader?: boolean | null
  }

  export type AnswerCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    questionId?: string | null
  }

  export type QuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedBy?: UserUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedBy?: UserUncheckedUpdateManyWithoutLikedQuestionsNestedInput
    additionals?: AdditionalUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuestionUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    additionals?: AdditionalUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    additionals?: AdditionalUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeText?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isLeader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Question?: QuestionUpdateOneWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdditionalCreateManyQuestionInput = {
    id?: string
    createdAt?: Date | string
    text: string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    likes?: number | null
    isBestAnswer?: boolean | null
    userId: string
  }

  export type UserUpdateWithoutLikedQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedEmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    isBestAnswer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdditionalDefaultArgs instead
     */
    export type AdditionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdditionalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerDefaultArgs instead
     */
    export type AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerDefaultArgs<ExtArgs>

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