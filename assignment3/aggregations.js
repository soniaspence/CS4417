db.tweets.aggregate (
     [ 
         { 
             $group : {
                  _id : "$user.screen_name" ,
                   count: {$sum: 1}
                }
            }, 
            {
                $sort : {
                    _id: -1
                }
            }
        ])

db.tweets.aggregate (
    [ 
        { 
            $group : {
                    _id : "$place.name" ,
                    count: {$sum: 1}
                }
            }, 
            {
                $sort : {
                    _id: -1
                }
            }
        ])

  

db.tweets.aggregate (
    [ 
        { 
            $group : {
                    _id : "$in_reply_to_screen_name" ,
                    count: {$sum: 1}
                }
            }, 
            {
                $sort : {
                    _id: -1
                }
            }
        ])

db.tweets.aggregate (
    [ 
        { 
            $project : {
                numberOfHashtags: { $cond: { if: { $isArray: "$utilities.hashtags" }, then: { $size: "$utilities.hashtags" }, else: "0"
            }, 
            $group : {
                _id : "$user.screen_name" ,
            }, 
            $sort : {
                _id: -1
            }
        }
    ])
    
