use napi::bindgen_prelude::*;
use napi_derive::napi;

use image::load_from_memory;

#[napi(object)]
pub struct PdqResult {
    pub hash: Buffer,
    pub quality: f64,
}

#[napi]
pub fn generate_pdq_from_buffer(input: Buffer) -> Result<Option<PdqResult>> {
    let img =
        load_from_memory(&input).map_err(|e| Error::new(Status::InvalidArg, e.to_string()))?;

    match pdqhash::generate_pdq(&img) {
        Some((hash, quality)) => Ok(Some(PdqResult {
            hash: Buffer::from(hash.to_vec()),
            quality: quality as f64,
        })),
        None => Ok(None),
    }
}
