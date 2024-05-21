
# Redis for chashing

# Start a redis container
docker run --name rediscont -p 6379:6379 -d redis/redis-stack

# Interact with Redis
docker exec -it rediscont redis-cli

# Set a key-value pair
SET mykey "Hello Redis"

# Get the value associated with the key
GET mykey
SET product camera NX GET EX 100

# Working with lists
LPUSH mylist "item-1"
LPUSH mylist "item-2"
RPUSH mylist "item-3"

# see list index to index
LRANGE mylist 0 2

# see all list item
LRANGE mylist 0 -1


# Publish/Subscribe Messaging
# first terminal for receive massage
SUBSCRIBE movies

# in different terminal write this command 
PUBLISH movies "Lapata Ladies"
PUBLISH movies "Kaathal"

# Transactions
SET num 1
INCR num
INCR num
INCR num
GET num

INCR num
INCR num
INCR num
EXEC
GET num