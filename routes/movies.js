const {
  getPopularMovies,
  getVideos,
  getMovieDetails,
  getMovieGenres,
  searchMovies,
  getTrendingMovies,
  getLatestMovies,
  getNowMovies,
  getUpcomingMovies,
  getTopMovies,
  getMovieReviews,
  getMovies,
  getMoviesByGenre,
} = require('../controllers/moviesController')

const router = require('express').Router()

router.get('/', getMovies)
router.get('/search', searchMovies)
router.get('/popular', getPopularMovies)
router.get('/trending', getTrendingMovies)
router.get('/latest', getLatestMovies)
router.get('/upcoming', getUpcomingMovies)
router.get('/now', getNowMovies)
router.get('/top', getTopMovies)
router.get('/genre', getMovieGenres)
router.get('/genre/:id', getMoviesByGenre)
router.get('/video/:id', getVideos)
router.get('/:id/reviews', getMovieReviews)
router.get('/:id', getMovieDetails)

module.exports = router
