initSidebarItems({"mod":[["base64","Base64 binary-to-text encoding"],["hex","Hex binary-to-text encoding"],["json","JSON parsing and serializationWhat is JSON?JSON (JavaScript Object Notation) is a way to write data in Javascript. Like XML, it allows to encode structured data in a text format that can be easily read by humans Its simple syntax and native compatibility with JavaScript have made it a widely used format.Data types that can be encoded are JavaScript types (see the `Json` enum for more details):`I64`: equivalent to rust's `i64` `U64`: equivalent to rust's `u64` `F64`: equivalent to rust's `f64` `Boolean`: equivalent to rust's `bool` `String`: equivalent to rust's `String` `Array`: equivalent to rust's `Vec<T>`, but also allowing objects of different types in the same array `Object`: equivalent to rust's `BTreeMap<String, json::Json>` `Null` An object is a series of string keys mapping to values, in `\"key\": value` format.  Arrays are enclosed in square brackets ([ ... ]) and objects in curly brackets ({ ... }).  A simple JSON document encoding a person, their age, address and phone numbers could look likeRust Type-based Encoding and DecodingRust provides a mechanism for low boilerplate encoding & decoding of values to and from JSON via the serialization API.  To be able to encode a piece of data, it must implement the `rustc_serialize::Encodable` trait.  To be able to decode a piece of data, it must implement the `rustc_serialize::Decodable` trait.  The Rust compiler provides an annotation to automatically generate the code for these traits: `#[derive(RustcDecodable, RustcEncodable)]`The JSON API provides an enum `json::Json` and a trait `ToJson` to encode objects.  The `ToJson` trait provides a `to_json` method to convert an object into a `json::Json` value.  A `json::Json` value can be encoded as a string or buffer using the functions described above.  You can also use the `json::Encoder` object, which implements the `Encoder` trait.When using `ToJson` the `Encodable` trait implementation is not mandatory.Examples of useUsing AutoserializationCreate a struct called `TestStruct` and serialize and deserialize it to and from JSON using the serialization API, using the derived serialization code.Using the `ToJson` traitThe examples above use the `ToJson` trait to generate the JSON string, which is required for custom mappings.Simple example of `ToJson` usageVerbose example of `ToJson` usageParsing a `str` to `Json` and reading the resultThe status of this libraryWhile this library is the standard way of working with JSON in Rust, there is a next-generation library called Serde that's in the works (it's faster, overcomes some design limitations of rustc-serialize and has more features). You might consider using it when starting new project or evaluating Rust JSON performance."]],"trait":[["Decodable",""],["Decoder",""],["DecoderHelpers",""],["Encodable",""],["Encoder",""],["EncoderHelpers",""]]});