import { IconButton, Icon, Box, Stack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function RatingStars({ totalStars = 5 }) {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <Stack direction="row" spacing={1}>
            {Array.from({ length: totalStars }).map((_, index) => (
                <Box key={index}>
                    <IconButton
                        icon={<Icon as={FaStar} />}
                        colorScheme={index < rating ? 'green' : 'gray'}
                        aria-label={`Rate ${index + 1}`}
                        onClick={() => handleRatingClick(index + 1)}
                    />
                </Box>
            ))}
        </Stack>
    );
}
export default RatingStars;
