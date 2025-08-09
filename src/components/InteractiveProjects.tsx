import { useState } from 'react';
import { ExternalLink, Github, Star, Play, Brain, TrendingUp, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InteractiveProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 4,
      title: 'Flood Prediction with Machine Learning',
      description: 'End-to-end regression model predicting flood probability with 94% R-squared accuracy, deployed as an interactive web app.',
      longDescription: 'Developed a high-performance LightGBM model by engineering new features (e.g., LandslideRisk). The project involved model comparison, hyperparameter tuning, and deployment via Streamlit, solving challenges like large file handling with Git LFS.',
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGSAbGBcYGR8fGxofICEhHyAfHyIhHyggIx4lHh8gITEhJSkrLi4uGiAzODMsNyotLisBCgoKDg0OGxAQGzImICYtLS0tLTAwMC0tLS0tLS0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xAA9EAACAgAFAgUDAgUCBAUFAAABAgMRAAQSITEFQQYTIlFhMnGBQpEUI1KhsQfRYnLB4RYkQ/DxFTNzgtL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAsEQACAgICAQMEAQQDAQAAAAABAgARAyESMUEEEyIyUWGhgUJScZEj0fAU/9oADAMBAAIRAxEAPwCF4rQrNFNH5FxoBJUiDS7Ah1KFjVixW/JH3D9Q63DLSRxtl4wvpVX0pr33cADVYI3u9gOMb+JIJpSrtKtEC/MIhJNAkBSxLf1XVm/wBWUiEbqwm0SAghla1G+xsbhueefjFVAAucuRmucsxlHdRLXoI9T9gfbayT842h6VS6/MTQpB0mQeYwv1DSCWBrg1WGbwtlx5mYh81GiZfrDgSSKKayvmgAEbkPdWBgk+QyeXCtmUJLsTHIgGkKDt9LMNW1+kgjV2wTlI1AMVi4nSR0rOVSP0+lUTYKRQLX6r3Bs3Z3xFy+dbyjGHDDY6KG9bA8cjjne++JfVswdTs8ztrUWfMLkqPpVizWwA23J3/bHTosSqPOfMrGNhGRF5jrz66FFKobg3bCu9G9RP6qElDL+RDFJ5qFmbSEUWKFn1bbgORfcA7e2OHVM++nSCtEm1WNQCvY7rZG5r7DHbM51wEfzzm6YkBi0pX+n0yrqVWH6STdXjSDPGlVtXmKQyqF10bGlRZveyCo9x84VTRurlC9GhA0GXeVtCJfJpQCwANWeSBuOdsSM7Gohj0aigJBYivWdyCao+kCq3r7YOS5qcSqjF2Da41CwiCmrZBoYEqGZfqv6Rgd0jI+awhZ3aNWslZV8schmHbmuLuvkUxbzEKDoQTBnE1AEMQVKkDYnalA54NftWJ/TMmHEJ107uYyNNaQ1gOzFwpog0NuBZ3wxnwTlwFfVKATYbUP34xEzHRIGYGOddSvpdnkZRqBJOpmACWBsb33rfCjMp+m4/sMsFdP6kihpJY8udFaY3DFjq29Pq20gWea2H2kZfr4BZlEDKxLaGj1iwdg1EEUOCP98E5MlllkKqyeZKPMBWaOTyipuxK5Ukk3xvx7Y69H6VJnoXMsjaI20xgoWLCtR9Wn0cD1bXVHYYx4/abi3QMgyeIZ4gRFIml3aQGCMIgoMlmk1gjetY/pb2OMn8USzMCxWQKj3R0guQwV6AsnSQCD9Vb1jeHos8GsIY3FkVUTgqBYKlzz+AfbG8PX5YIx/JikZlHOXQgjfcMpBVt6qjwK+danoQDkOzAMWSzEiMyx+WgNE7Kur2rb96xk81ppkYvImnSdZ0hd9q/P4s++GLLeIkmA1ZSPUhv1T6OQRVNzzfHzgT12FWlFQJlyfq0yBwD2Ox0rY3o84cOSaIqI4UC1M49L6tJCztCxR3UilJA3N7D324+MSum9a6j5gkQzyXvTKxWwK/5dr+3HsMREyLNGPJRnK/WBpJs7X70RYrfjDh0aeaE5b+IVY4SbYlCzG7pWAIomiAVujVgjbAdh4AjYkJ7JqSh4ljy/ql1zZrYPFFqCqxsHUQNNgbaaO5/ITJM2jzuZIDK8xH1u1hib9JUgE1sNq+PeSejZxzLLHDMilj6HiYNubJNR6AO53AG+JXTumRwyPJNUYhIJKhiXP1BR6qFjYEmrrckHAWl/zGYuxF9QB1BmhkaNbFErsbPJ5/2+cZLMxcBj9WzWv07gk3R72SRvzhiMimJ8zNl0kdnMii2Plrqqn3G9kUSN7/ABjn1cxZiQyJJAsflD06irAmjZUDkEkem6qzhg9miP5iNhrYP8Qn/wCMiiLHFUg0KuqYGlq9V7WS3F/A2x70nxbBO4TOQL6/SsqgVZ9xp11vVWx349lxEVgjasuyrq1AFvVqa7PpqhtRFUPfnBVeg64fPhCxnYhlkIAFGlCgMxJN7n7bYxCjRjj3e4yf+Ien5OMPl4wxckFUGlgAaNggECx7b/asS+j5+PqUbebFGnqSgW16+47ij6SK+LxVSQkG3tCNtLfUD/xA0f3xL6bnooyrSRlyHU2HoDSQeB3/ADgHGK1FXO3LfUtrKZnKZUALLCkTuyjSCbkAFqzBiNVD6TV9sAM/4whacJl4/MLVq1+ZGxPYLbLvQBG2FDrefg8lWgZV1PZj8tbQ2SWO53YBeBVKRv316TFHUeanGoAswVY71OC2kaT6KujsOFAq8KEAFmUOUk0JZ2V6jF5ZdS/lxvpf1s2gAHnUNV3S17nEmDM5WV/4gSDUgaM3IV00+lgVJFesVZ52+MU1k86wjzKrKF89QJE0bN6t6OnarvaucSM31JpkWEKqxottp9OqhuTbaLJuq/qPvjcJhnEsvM+KsqocxvJLoNELrYH3KnUFNb7322uxZHp3W4ZovOSS4y2gAgqwb+k6j9R7D/OKt8VZh1MUUayLlkW4/MsCUNTMSA24vax29rx5005lAv8AMngjjcNp0+kk0wJUGj2J1A2CMAgV3D7p5VUt+LMq1kMpFkbHuDRB+QdsCG8UwDMvl3YJoUHU5IBJIAA2qjexvtxjSLKdOmIQLlpWUla9N2SWND21MeNtziNn8nkIfMFwB9NrExT0kDb0jet73wgP4lyddw1kuswTO8cUqu8f1Adr/sR8jEy8Jn+n7yBZWkijOoqA8CoFar3JU1eG8yj+k/tjTKbErfOddy4jYZiIebIGAZGJC0tAn1E87Hj9wcCctlMrKwQGcs5FBJU02fhk1Cx2JPOB6dKlHKPbbklGtR3J9HI5oXY4vjBrpedmJ/mR5dljXUpOVJYBdqDRIGUnck3fvjED+kyHJifkISfPRZNfKjCtMiaUaSaMoCx9JrSNgPYjnA7xD0nNyRoZ21FNRBpGIsAlVMRZqvcBhQ/wtZuGUuTI00y1WtlewPb12aHGCmT6pm1DMzqVdQCzlgUO4B0ggFvuG7YYiujBd2CNRl6b01Hjy6CWFnh9UhURs8V2f5jKDSqWJ2NXyQRgbNlIJpi6znNMGVX0xMtHfli6jhSQQf04ieBsr/5h4pI4m8xNOpqutQLBTx6lP32FEHDXD/p3CokAjXcjTqkkIJF0WUH2J73ufyrEA9mUUFl6EUMx045YSFY2YFSsjlUcqLA/lhZP6lIuz3vbEjKQh08slY9EmlZnco5XYtagEMV7U1fUBeJ+d8BTJL5iMt/UBGGVR2q9yK2N7/fnAqTwtnL0VHXb1qAD+Be+AXTyZP22/tk/M9Xyi7Nl2lVPrkDANKNt6KmiTd73jl1TxLlwqGJAzMPUJQ1KAe3qIs+4II9h379D8Fhtpp1LE0saaipP/MKI2+MMUXgKONTUKuSdwzattuL2qx/bCcsfjf8AiOMeQijQiR0/q2pxAippkbR6NWq2YEN6iRYNb1VXzhozXSZvWcqkqUCxfMCNKOpRQ0xG9rNDTXzxhg6J4ZjSTX5CQhTYCqASe3Hb398MroDzvghg26/3HXFxFE3EvIeHZXMRmEc0dEP5qKWIr06WoMBf9QbE2bJ5aIL5uVikXVS0GmKVzSiEgV7bXXc4ZI8uqgKqqAOAAAB9hj1MugOoIoO+4UA787/ONUehEbqPgzKSMzGTMLE1VCI5dCnfcBY9Q996q8cOqSZNmeAQqJYwHspagGgCR6CAFINHdeTteLFwJ6j4Zy80hlkXUxHBJ08VdfYDDE6qLx+0R+lZWLMrqDoFAJbTBGtDuaWUMR7GufjC51PqULFmREXchNKEMy+kU7MW3FXz3PxiR4h8PJl5in8QrSFq0LFst0QDvuTYoDG3kQRipslMNJoTP5sQdq/SGsA7XV9sOvEC9zma+jr9zfw/LDC6zSPJEJbpjECnqsWCAtKCDsB271hlj61l8wy5caJJozUZeICOdlBB0ktp3F6dQHO3OBpXLLCwizbojqtiMM7alNgBgASATupoge+B3W8jCiQtDKsjmmaSyrA71Qs6DY42PqHyQLDGOLQanDrGacSSAwxQu7et1VwW02vpJHpW+aqzvvgXlovM23ClgLFsNXIG+2/++G7r2chljj/if4nLrpVWZhqBfnkhnrncngYIdD8MRrKrx+a5u2YuaNiiSQR2P3wWyqtA3cAwFmu4rzdBHlgfxhDNpYReUV3IsKKfTZNDUNhgZ0rIM+YSNZishIAlUklW508/i/j2w8z+B4MtqmaZoI4xevVsDY4H1bmtr74USU/ixHaoomYtmGskhSdzptvVVWP6sOr8uor46IJhXxHl5IYohIGaV5GBlKUG2q7BpmJuhyAATxutRLIo1BY2M2y+pbUDY7BrW75aro1teGrw9IskyidBpLMI2aYqL30kKz/j0juBg/1vwOjMjqtn9ZU6Td8ge1WKvah84Tnx0RHOIvsGJXU4ZdJaeFvNC/WzAAgtQPp2NXRH1Gxv2wCzUZ1v5gSE7lUVTTEfpA3NHsSav7nFn5TwXJA7NFIxsEAnSK4IPBrcci8L3iWbTpgmLQ67JlMjygqW9goJoiu5wy5d0Ir4qFmLWWzEsALIUI3LKyKw4oGje4s19sGcznzmobKsEiDU/wCjVp3sBrBH6av+9Yg+VDHo87LsqP3uVRIBsSoZgaut/fHb/wCqJHMhympYtKq8ew1gH1BhbXajk779sY7PW4q61f8AECKsekgmydw4JrmtwRdc/wDfHbLrO48sRS0FoVGxA+SaG11vi3810XUVeOEDbhyhZfsRf9jgV1V5o5FXy2OoqrCJXOkEiiHAO/pJI0km+RiQzNdcf3K//Mg2T+ogdIy4mRkmMqvEhaNqNBVssgJB3qyFrffcbYFTekEfzNBawG2JPuRxf/x84t2HxLFGCGhnZiCCDCOBsb2Db+zAX+MQpuuZVwW0RXp1JG0wikIG26FTRJuveh70HDkG6gOEV3KsykbySBI0LMSAo9/bn/OLZlYhVQ9PemQCSlBLBQFHA0WKBFsNh27CB1xQgYRShigcoYnobi11BDuB8b7YsGFyVUkAEgEgbgbcDa6/GEbKX7FSiYgnRgPLZkxCJVyp3UXborDgcXpJN8A/9Mdch1xCp8+om1GlZWVtPawbo189r24wtde8XukzqYnWPTQ8wMDqphqAJK1VDSPcNtWBWQ8ZJGmn+Gi2JrS6KK7bFD/nBCzNlA1GvOddy2Xi84BpUkoKEF/g6iNN333wPyHjrJ0WEcinRqYVZ2NaBvzXq7D5wC6f1V2i1LJGI1emg1rrKMKIBKhSeTxWwvflei6NOlroif8A4fNi1CxsaLj77e2MMKATNkc7HUszw71DL51XZBIpXZlYilLbivcbEfjG/iboUcsRXSBuDqFlwb4BO9fGEfpfS2gWW80sLyLo1JLGYiCNrJYMp3+43wydKzzQRLE8yTlCys6ta7UR6mcD3Go1xVG9WEbGF2scMWFPJvSfDKquWYVcUhb6QLBrc7Ekitr4v8hozmcjiBkf0gDdyNgPk9tzhH674nkIWPLKzB1ZtUTqx0hqIICsV2+Rz8HAjxHnc3mFbL5jy03VwpRrF3VMoIsfSbrnjfGVT0xhZgASBLVhzCuoZGDKwsMpsEe4IxpmMpHIKdFa67b7bjcb4qHw713Mww+XCbDNYBVCbNgmz29B57D2rDF4lzOfkjZB5aoqqXYGiSo9VEGypPYgd8Eruogy6uoWzXi/K5ZnghgJkQkaUVVUnljqF2Ksk123+JXh3xYZ2qSNY1K2riQFfq0gNYFEkbVd0cVI2VlYyTMVsMCWBUUW+NmN7+kA4wZrMOpXRLpvhVfTzdgAabvv9sU9tfBkPea5dcXivJsSP4hFq71Wo9Jo7nb554wTy2ZSRdaOrqeGUgj9xigZYy6ojJIZQWJO5L6iDpbve398G/Cq53LTKyZaUqTbR6tIcc6T2/cX/wBMUWu465mJ6lrdS69l8u6pNIEZhYFE7XV2BWCEUoZQykFSLBHBB3/xio/GOUzE7xTCFg7RoXC0fUL3oE/ua2x38O5HO5dJJolkRmdVMYpw31FjpCtR2AskfUeeykCu4/NuVVqWmdevbTo0/OrVf7aa+cD+q+IctlgvnShdYtaBaxxfpB9PzhN8R5jN5jKhP4adSXBZ2ZQH2I0FQFtN7qhuPjdY/wDpma0IksBYB7BAOoL3UOAQqnmvffAHHyYWdvAlh9d6jkHnSJmhM7aaYx6rDj0jWBsCPmvUPfHM+Eunq+ltJbUNSu5Ygv8ATp1Ejc+wr9sKPVuiZiXSq5RoSgVUKyrp0801jUxN7WQBfFYl5rpGe8phodyRGVGsF4wL/UoUdx32wGC39X7gBbdrGjKZLIatGXEZkVW33quGbUPSABe/xgXkPDvTJgyw6TKp1EO8lUOSCTx3/wA4CZfzcvl51mVRJMujy5ZFDOGNMVa/qO/cbCq3BG3grI5yLNNSHLrIG1WQR3IFbhiL4Nfe6vfEj6v3MCbHx/UZvFeQy8GTE4Q5hCY9QaQsjKx+oarHtR44OPeieLoZg38tIfIj1xq0g0EKGGnVo9ND29xtgBm+nSRTGUmNkWNEEjMsaVoUBSAKocAbfSDzhdXw7mJNRhaJlN2VdSBZ3Umy3FcjfBXhWzM5e9D+JYvh3xTBnI5laARRxoCwPqWiN7AUd+Nu3bAHwzlslm3ZUSNWW2CFmLMu3qG1cmudsLL9G6hGnleWxjJBpW9JNUDsQCRvziR07LZ7LSrMInDUoIUGS1BGqwpNkheDt9qxjwPTfuIr5Adr+pZPR/DEcL+ZoCnTpIUtVe3NVuePvjrL1PKZMLG8mi2AAbUTZ/H0gVvx/fFc9W8QSy5hJEzUqIrg6QuhgpOplIBKkKQAA2rn8YH9TnOYdXkfU6+kOy7stk+oA8C654/GMFA7Mdsn2Et+DreXaLzhMoj41Na/bkAn8c4W85k+n5942JTzJFB0MCJBdkA6O+x5PzhAy3nRwGJXTSzBitE7i6N129rOOvRJ5IJkfYrqOs0CxBUivcCyTsf34xio+8UZrrUeW8GwhSrwxqtadbyyEAckqWc1ZPAA44xFg8J5ZPJKIsqubVg7lbOxF3fbvXB9jhZ6vnc3mpw8AK6FCqI5AVriwGrST7VfbfFuZdisa6yLVBrOwFgbn2G9nE2U/wB0qjgn6Z2Ow2HHAH/fGH/HGA3ijq8mXh8yNFbcAsx9KDmyBu3tscAU8bGPLK8wLPJq8p0itKFAawHG/cgVthgLhLAHccWcD6j7mzX+3zgF1DqEInVHyyPqG0oaOjuARp+qwSF45YAHcDG+Q8X5SRYj5qK0hChSSKatxbAXvtt7r74M5nLA1rHuKNEEdwRR2wCK8Td9GQYeu5Z2ZA9stWpja+2wGnci9wOMb5yWZVYosbbHSCzCzWwICne74IxCzOdhyrkKvqkOo1pUAcEkmjQ/NYht4gSdJlyvlSz6CUWJ1dyeNWkqPpJHN8fjDUftNOnSc0k4JzIhWUtWmObUDQHbajv+dj3wUi6VCt/y1O97gHFQReK5V0iRIJQGBbXEpLV21dqqtgKxZ3hzxJHmoRKzJE1kFTInY9rN/uB37b4xx1uImUNqVPkMkwkX+ZCyIfUpmGkruasAmjuLAsE8Y7+IMvHHO3lOGUgMul70juoIA44AIFDAlc22pCbIDC9V0e4+a/b4xpPmS7szkdzxSn4AFAcVti2zucpb40JPyGdJeomaJyT6lLltIF1SkLpFffB/qc+XaMSS/wA10WjpzY9Wo2BoBd1F8jt3o4XfDmWMrSqkbFWjYHTRrgjdgRyBxR+ccM3AYSyMhW+dXJHI3G3sdsIygtVw2wW4WzniR9MQj1oFUAt5kh8yibu3NL20rW4P4cOidXTqKGOSkKDfytast7DU2sl+5C0fnfCDNm3eIO8pKJUSrpUVsaoCiQAL47ne8edJ6nNCWaONWDLRby1auaNkGiPf/thvbFajLkIbcdvE2VyMKo+VYvLISSfNZxX6mIJ+pjQ7cHbYYg5GXJVqmebUu9pQU/G43YXfYenC70/rEqBdQEkaUBE90AOAvBUfCnviEvUX1GSr3viwDdgjng8YUpcJyJXUsPp+WyEg80THy9vS7jWP+HQq2Td8WD84Y4clEFQI4QHcKRpNcGlNEG9txhG6n0ULBHcsiln1sJNG38vVY+neyFq+/wAE4kZjLHKxmSPJTxNp/wDvjMNJXBLMiilBA3JoC8c5wo3mdCsU8VHnOZULFrCyhRwwFg3VMTxXztziJ0bMZd9T+bZj3cH0hK/qPHa6vtiu+rdakIIVzRNGiGQhgNI45HPP7YEdP6oEdtago6FHC2OQwUjve/PsWHfDr6YdwP6kqal4Z6HzRQAsbWTVf23+2IfUvESQRIw/nXt/LIrYc37fYYRuleJZXjSPzmYrUbokauCm51A8/Sukkn9Y274h+KVCzRKI2eEpGzUzEFb1adgAABt3r4wVxU25my/GxLF6R1uHOxsVB0ig2r3+PsR9WNOoSxtBLFl3jZ1BJCP/ADFKiyRTAlh6eSB2O22K96tm8kdKZbKx7gGQq8l0aOm2JrtexvajgF/FJHIWy6nhgCybjUCrdzsAduMU9kE3EOZgJZfXOuM/S4pkfXIyrbqCQWAqQ0UO12dwvPIwkwZnPCKmkmVDqUDTJRtjd7VYOqyT2r2qHB1Z4oohBHIpYtbDXTkVWmqsqOed643uNDnI/M1TxyKWO5VmV99iRZAP5+cOMdDqSbJZBhCLrEqzKkj+ativMdaUEVe5ZRsb3OxANAjDhnfEyQoIYFdnEZLTOQ0ketSEoELekkA6gvA5u8KMGXyaTLqSSRWqg5CvH8mjve1ffAnPSap5WQHSXajTe+x3v784XireJubKO4Yg8RZ2Iqskjsq76JjqB9O2xN1RBAsdsSf/ABrMSdFC9wBGh0++nbb7m+B82tujPtpcAbm9thtfxzseKNfOO2XySc1xufVXtYHeq2s3zgtjxnZEQZHXox68MdRji8x8y0rebYSNo2NEAb6lLb9ux71hoi8SZOMK1FCwFHQSx243Gu7BG4FnFf5eKJSVdGZTGjRmDeRWY7m2FKStXwKAoY5eIM3kvJDRTTPIxFEgl/pFhrpOQT6SSC2J8FJ0J0jJS9ybN41llkZWykUpLBFLxnUC5Gm1+ksd6sclb9jDPimQ6of4GAlAAxjhRW9JAbWQrABjzVbmgeMCl6E8iaj/AC9rPm0L4O25a6YHcAHbc9iXQfDxmZ4o/L1UWosTYHcFRR5Aq+/bfDsEA6kLyGcM71iJlNZaOJyNI0s+laJ9VavqP0kMK2sAYhdK6hUwM2kxqb4BB9gQPqHYjmr9sGvE/h7MeWJfLpt7QJGrA3ufTVrXFcCtua0g8J5xYAZMmhNFgwa5CDuDqUlBXbVXfGHGtTMj8pPbxiRmGWBUdSPQiRqq3twoW6ABG5J352w7eE+pPNl43ma5H1FQQFYqO4UAbd7rvziv+jZWWFmSOJPOWKQ6i6kL+liSq7ut1z2IrnAXqOXzCxpNIz+uwG12NwD2Pe9x24PyoRfEoHZdncvDMQqysrfSR6t6FfOIGX6Xl1HlDVtfoSZloE3soOwpu3vits7PPLl0gkfWUCtEjWBKukgkSWquACtfAO5JGNPAua8rOoJ7Vt0DM+y2D6dzRUkbV3+DjBa3cc5LIBEtPI5NYVSKONVjX2oUeOAOT73jtmMwiC3ZVHuxA+O/zgfJ13LAb5iI1R9Mii/t6q7cXhIz/jrMtITAkcYApWJVpCPbUTQvmgO3OEAuM+RUlg5nKxP6pERu1kXtf+5xDyuZycokZPKIjtXYKo0H2uv8YScj/qNMrBc1HrT3X0sP76T9tvvh46U0bx640XyZfUps23yyFRX7nAYEQplD9TWToEBO6igNvSp/uQcdJeo5bL1G80UfcK7Kpok8Dba7/bE8nEbMTyKaTy6r9TlT+wU4VVA6lDuVBJ4VeiysJQBpVVDFga22G23PtjPDeVETF8xk5pGDAxgBgoYA1tpINsRzxW2LKg6aQysd6vgnvtvvR2xKXKqBSgr8qSG/B5xPH6h/MB9OgNiAcvk8xS+ac0Ng2k+WFB7C1RW278c79xiH1/pccwPmLpKjjWgong88njf3xM8WSZqKJWimnf1aQsaKDuD6iygEUBQ00N+O+AEbwSqqZiNI5mFmQxO0oN7FqBBDfLHkbDHSMl7Wv/fzJOKsGcuk9EmjgCKPWzBpSxjqhqACarA23IBJPPpBrGZroMrhzEXLBwG2AvYElYkBZgCfqG22B2eGSVgIs1rUrbOIiKbtXG21n4Iq8S+iZHLu+o5tI2T1B2AWzvVaiOCB2GD7eUi6kee+PH9wUeiTC68y9ZUWukkj2s7H/tiRPkc08gExfzFGwciyLNn3PPJw0HxmsFQqUlYXrlGwdmYksBpOxYnvxjRfFkqgyBMu5kVnDqNRBTSD2YgBRelgptrsA3hmRwBfmb21/M5R5ufzhmhlDJprLqNaopolKYnctqoAFeb3Fbw+s+LszMWhoZdT6XBoi+DZN6qvavvzhdfrcyoIxICiyF/TQNktuKINXqPAO/tWDPhjpmdcCWGZEsUAyqxqzv6lKizYu/ztgceG2mDM3xEXvOe9CHYafTY3I2vYAE3dd6PffBWWZykKytrZbQKUUFQW29Ra2BJqiBQUb74Yus+FJSpSPIZeMnTplXMMxFcghuSR3o9++F7p/R2/jVhZAukjWHOqvTZtl24rg7Ai+CMOTqLRBjH0vIQrEWtoHLaGQ6UD1TAllSiCpJHc7i++Dec6J5SipJ5qIHlqVLEjYAMQAuxokkDCP4yy6RzLGieUVXcIWrV7gsBY53/2x7m/FsixwpE7kRsrFiiqCy76CATqUEAi6449pDGW8mX94D4kRrz/AE2MIPOzrJFIdSrMEiCFQ2xATSCNRGwFnbehiSMrkJIGggihkI06Z1lBRyAhbWwYOAbIod9u2y5m/GeYCAofTpvWoHcg+sWyijQ7bH3N4jdIyozMTPPK0cYa1KQKxYkk2W9JoEk7mvWBtxhwK7MPIE0IY6a5dJIIIYSkdswuZQGq61tICpIHc1hU6t1SKZwzxCwSBqLtsSCAW1XQrarvU2/GDGT8NSNHKYm1BlsEkraHcFuR9J1EE/a8K6ZJXk8vzUiGogSyMQgI7EgGvufbesMhvzI5OQoVOua8sSFgFosbCj0gDfY0CB29wBziOZlkceWCo7AEkn97N/e+caZfJAMrOzLFvb6SVsbbEXdmgPv+ceRu4c01k3ZB35I3+Tvth6FSJuTk6e8zv5akhQSx1Abduauz2Av4xwyGVkkljiNqxIADD3770ON98TsvmbHmT6mBbQUXTqIrc2RQoDuSTdbbnErRlVXzGkl1BmARdAKKN49ypuzzXF/nE+fioeNz3pLiIR1mpstJJtKDFQUb9w+o3Qoad9XPOJcfhmPMMVSaJnJLACNwWFCmPtd3pPycLjZnzCGd2LaQPSBQAAA4HwORe3JxPykLsQAA7bsDq1MEBF67NKAKI77EVuMI4I6O4wIPiEM54eOWZWzGZTS42Ol2agORXYChd/jbEfw8SqTaM+kTsqiirUVv1U2m1Ivt2BsjEHPQsGkXzI5CK0tGWYHfsarjc3xWO3SOjSMzJ5R85tSBSD5ejTZIYAi+aIOxHzYZb4nkYdk6En57PGQxxy5jzArFWmBZWdCdQBq6AJPNnccVghPmMplmkGXkmLjTREqGJ1rhWIZrF8Gt7FYGZXpY/h5g8sylW/8Atoo9J9Q31OBXpOw9ROnjv5l+mQ/+o7p9HllY3cav1UKBAu6s+3sQRQvuV+Y6EjZdJSCUg9Q9QJVxfqBvkLZHPI9W1bYneDYHmEsb5gxxEqTWggOSNyH7XSnT3IvbHI9MnB/8rJLNYYsTC8RQDiiTuSew9vnEHOrMY2lkTNHUwKs6HTZtWLEi7PYj2ODfgRPkOwY7ZmH+QZczD5zwuipmIgv8wGzqO40gbKdudvnHLo3V8p/EmRvMXUdlZXOjat9LlWBvuu1cDEP/AE8zka+ak8fmRSNTlWtlIB3KqfMZTspIB532BwzR+HulzbxxuT+oFp1r7a9JIxJhRuVBLDUVl6bk1WdnzCuNRaNI46ZefTZ/TxS+mucIpYBt70/0nb9vn2/HOLhzHgvJEeiEg/8A5JP/AOsQ834XEY1xZaOWv/TMji7Gxs2DR7MCKs7EA4CZgpo/7iv6csL1K7jik069LAAaW/ls1X2vsdudsWP4JiMSUJkkhZdVl90bbgEbK1k6TuD98ApY82XDHJxhNQBjWNmQVvdGlJ3PrSruieMD8/1yGS5GyqQMBWlAWjfm9yQAb4Gnt35D3ygWk7lshwRd7HuDtjEcHi/yCP8AIH74UvC3UkjhpyIkvWskhbTIDzpVnJU7A0LG+wBNBly+djkRZFdSrgMpJrY/Boj84nOi5x6fLrjVtSvtuykEE/gkfscSKxUk2bkSVZIHliyzGtAc3GEN6Wsab1WQN9XBPOLPyXUlmi81PpNlTVdr3xBkIMOPKG0Z2hg0oFZ2k35YAk8kA0oFDtsOBv7w5shDrUu4RiAoGrQWC9gbBI4urxOy2ajkry3V/SG9LA+k8HbsaNH4xIBwLlaisvhOzZEdb7W5O9/qLGufbG8vhaIkKuXAv6neQsoHOwBskn30j/GGdcBOpZfPmYNDPEsXBQx2QK5JN2b+wG2x3w6uR5isB9oNl6Tk4zJbw6ox6110woWBuw3IAoE4C9H670+ZqzUKKFXTHZLrpFsbHY7LS0bPFnjTqvSJRmUDwqwoK0tKpcvY1UW07UoAIrnbfCv12AQuUcEFboslE8Cit6QBpO6+/HtfEoB7uc2V2+2pJz0mXJLQx+nzGOmjQB+kcE7AWSTuSeMNPQ/Ex8jR/CySPpIQJGaeiB6dNna7NCh8YRMz06bSHC6g1EaBYoj4x36VLJC6kCcOD6VUEFvUpI9wNuwN17YsQp8yYdwdx0yDPKsqfwc7SilDKr/yyRZsWBqojZr7cXgT1yeARGLysykpNN5hQE/DV2vbTtz8VgnP13NpC87SujzyFVjCRBrCgB5LFL6QFNAH0rgKMlKscsuYy82kR3bNGyklrskjVVG/T3+MY0dgTMSRUkHrWWbLxpLE8kkSEamoMAWIoktqatr2/Axxlk6c7qDCPLI51aac13u6/wBvvgd1IKFSZJKWSyEMekRnYaLOx23sDucbz5XJJGGD5hZCBykTowbkimvajXFbYn7f5MHuN+IVz/UIcnmlOVMbBF9Q8sBdRFUDa6hVHtuL33wKHW8w2YtmBbUjNp9QIXgWzFqrYrq7nEweFphSqGmgkUmN0K3TbKab55odqwfOUfN5dWhysaSZZhHovQ0gUJrIXRsLN+o9z3w+Nk6O4SH76+0F+HvFrtmZIpE1pOSoVbtOdlJIpfzQHGIWYzIy2oiBFBZiBJENa2Foepd655/UPcHHaKc5QM2YyUZm87UCzKaoH0UA3pBo7EdsC+qZiXMgTNGiKXILA0De6jQO6gEAgUQBe+5YUD8YvJqo9zl0xJpp1dVJJIdv5ZI0g0SVC0VFEYldXyJFuqEJrNOsRCUTt66AJG3pv3xO8PdbgyY1eZJqceWURVrRdteoXTc7G7Ptjg3UJZZgsUpMSArGpoKqg6gpF1tz33FfYHZuAKONQj0XoUxjbymjcOgmKkONWkagNVEAmyOaO+PDlctLDITOIi5S/wBWyrekoq0ADuDzffviNBlozKw85ljBvWradq5GnbknbfbbE3qnSMsCP4bMqxC7mTUPVVDha353HfbE8jLeo+1FagDN9CXbTmINB3BXXVknaqJBA3JqgBeHLwpkuoFBHl/4UrGosOr7B971batQtr35wPl6K0uhfPymlY7Yec9FiKe9CqwH3PHxYxK8OpNkGlaOfKFSyqwE/wBK2u66wdxZ51c8HsA4I+W4yitiC890/NLParIZZGZdKI6WwNMAaUHej6dsRs1DnYWVZjMjNVIxIY2aFAG+drO3zhm654nkzWvJkQshtTIzbhttLawFRfV/w76q72VjKeGc8ZhKEjbSxBLsWBKmiGB3Iv8AfBJx+SBF4kn4wh0fr+Zg1xuJCjGqZ60t3IJDAgKOPge+7MOphYY5RJlizkipZ9A/UfUdJGraqrv2rCr1SHNSgLmEgWOJg7FUeNm1Xfq0bnud/wC+NGzGRf0xRhTezSM2kUOdtVHk8fPfALL1VyqmhVyfP1nzZFBjcNqrRl5LJ5A8txVkmgKUg0Ku94LzZyCQSKuaVI3tvMR62Gohwx0cUdz96BxMykeWCjTO0bg6W8jWUkGoHZtKkkA3QPHvtgP1KLS5k/iWLGjGG8wmRb2FuCDVnY7fvjBQDEKltwd1jq8zz+Y1al+htCIwrizGB6hxd4sHw/16VMjqaLMTuuujRcbbgFtyo+/YbbcVjEXlY6l23N0Fr4FUO1UB9hidkpomceawUWPUARpI2BPJse4w7oPMmjcTcKZrxZmZiSHlRWohI3IBPBCkeoAhWodjZF1g7N44/wDK6ZDJFmRVFBs+/Nmqsbn/ACeMDOg9JWRtEGZEjuWQAa1rUCQNRAr0qwG+/wCcej/S7NiRI5GiTXq0kMTZAuueas17A+2E4oY//IOtzl1Lx3mGiULJTA/UCLO2xKjaxRN1VNuNgcL3Tss2YkOlGkWw0mmhQ21bXt3rDdlOhzZPzJ1eLSilmURMyhSSQVOu/cC22B3xzHWFzEbSyyrAybK8cThzZ3BPmm9t9PO1i96YMoUhe4ChJ+cg9d6uxycGWuUMjHWsg0+nsL719/bbjAHJ5iNFqTLRTNzqZ5Qa7D0OBX474YYfD8MpVsnmY9Kj1K6nVZuzpO3FbV+fbhN4QkZmZphbEk6UNb7++EGfGNEzHE7bAnOXMyZYeXPomANeS7Fo0o3TCtOq+ADQvveGLI9RizMflw9PeMMPVoZ2AXZSyooG4FAGjW2FKXqUmXN6SFYMulxWk7rYXi1N1yARhl6d1+XyV805wEi0fKpp1gChqZWBJO/I2rvhhYG6hRrMHdNy0uRlSQmYLqCCN42jMuwpAWvYfsKHuMWLlPEGWkk8pZl8y9Oggg37DajXwTxhCzfTsxNmhmHeYKhAjMrNrFAGyeV9R1bD2xPmzMOUKyO6u44hSRi1/wDGW+gcfJ/e5uFfo3Lp8Ab1LAiawDxYvG2sAi+/GK4jly/UA58qV8yBSAOwSNRdN3UD3BDFjwN9nUwvUZcikKkmwOFIYkEbc/1H8YkyBfMquTkLqSM309X3JN+zepb+x7fGOEnSA1BiGH6rAP7XhW6145kgzTwiFXRDW9gng3dkccGu/GGeLxBligdp409Kkh3AK6uLBO2Jth8wLmBJAns/SlUWp0gDjT/tXJxHTpWoggIWBuyOK4IPvf7YL5bNI6hkdXU8MpBB/I2x1vCe2LsSnPVStuv+DZGkkKS0GdnAfetRG/ufbe8Gpc4+Xy9S5DLGNQAXkaSTULG7fyz37X9sNslEbixzXvW/fb98L/SvEMkuYfLyQpFpTVp8wO1Hi69P3Auvf36VfJ99SJVB0NxRl6nAVKvFl2ikbzC8BGtAz6ipDnWKrSBQ5N84X4hDJMBK+mJmAZ6LFVAAXSBQNAVv2PfDX4/kCGLVD5kUYC6FbSu9nbTuDse3f5wGyfRPMzMtao49Z0A/Ut+pATfYcm/bfF1vucuQMTQkzI9S8qNooM04ZNyzC1cVpCxoV1AWQSd29Oqqul/OK2XKvHLLY2BAkQqd6GplUk6aB0ijR7YmeGS65wSGMnyy42CmmAr9Xp5I7979ziVNPlyzK4BRntm1s0jb/DlaDMaqrr8YI+O6m+pdmB+t9bkzAj8w7ovI5Y92YncsBQsjgUNhj3K5OaWIRqyFSwYKw3vdeSNhVmr+cPfTsjkpcttCkpCbWlMSLoA1yPcffvhd6D4gggje4WDFxWhifTvYOprsHsKu/wA4d2KLai4qgcvkYOHSo4vTOy6l9VAlvgKCDRv9thhryRilhQRQIZiCPKJWNiF+lg1ChVb3dg4OydHjzGXKhdWoqxQko0ZrUAwG4am3Br84CZTp0MMsUEmgM7UgVWJI3I1EnY7GqrYcY5Tm5jfc6fbK9dRPfIZiH6q1DcoCbob3daSPziVNl2bQNWgabaQC9uCdOq2pqAo8G8WL1sRIoiMqrLICE1X7VQ2IHbY1fbfAvL+FyRDG7lhGCCugrqDAD1EPZqtjtwLvG98VbdxD6YE6kaLoMDZZWizbPMULBXjCg6NnFgWtb8ntwawldShEZU2rl1scgjetwd9Xf23GLHynhLKhxmmiMZU6z5jEEFTsxBbT2Bs4X/GE6ELN5QRwxGoSAll5J9LA7ek4ZcgJ+IiZMIVbig+ddwGsadR2IPPO5sk+wsnYb8bl4OoykppnERC+g+YTZvlqJVB3vbi98ev1LLRWY4Ftk9WqQutnuLGzd+TyMEMh1PIxoaysLHhXIDvvuNnIWhuCRvddsPfLsRVoeZy6ofMy6SCVpWIKysybKFJI0nckMRuT3C4CZbLQhJNZZWOnQoIqt7JN37UPk4nNkZXzAkigk8qVhoCIopTtQosF2+4Hf2wy9P6BF/FPG8A8tYwbkCGfU2wNrSkGm3I7DABrQ3KBbNkSuY88yt6CR7bkH77dz3OHjwt1pp45hPuY4wUlZ9JUWFAv/mIo9vtWNc14URCVWIszWV/mRq1/fWDVdgN9XxhdjywjzDKwcBwylAQWSjXqoEGqJofBsVirBXXqIAyGwYQ6d1siVWm/nBmtkLABiD31KRdjkAGu4wC6jGpaQoNPrLFP6QSSKPJAHJ42Hxiaemlo3kjUsibs2wAvuAKN4meGo55JNo1kQgBzIi0PsWFk1vX7jbCFwg5GYlnIBEh+DgvnanPoGxAFlr4UAgrzW52GxO1kWK3h0mBvInLWDpVlQhqsKNlQAV208k2Tjv0bocKltKqF4IApWv8A4QdO1A8YYEWgBzX2/wClY5DnD/ICdSYOGjK+/geoeSYJCkEcg1lkADg7WlIVH35/viDlf9O3Yi5iVu/o0/5bexiz0B9yfk1/0AGN8TOXIDo0I/sJW9xc6T4OysW5hRmFEE21EdxZ2N+3sMHJIUJsoCfkY7Y8whYnuUChepRGWzoZjJKPON2de+o/Pf8AOJ2V8R5yFSIpEjBohVVCigc7G635/wC2IfVJMvqH8MJAlk1KQaN+nSV3oC7DX255wObNb9yaqye37bjHqcQZ5QJHRhXIeJc3GzsG1lmDMSosnjmrqtqPG1Vgz1brsk+WkkkkjkmVkK+hQwFHWB6tWlTvqo/V+msKQkJ3og3zqq/3xvFN+/2s84BABupvcbqHOleJDHA0KI6M7amdTVntXfb78e+CXSPEdRStPOzOxtUoMNSAlft6qG5AG33wrQK0hCIbJIo8f/HOHrKeBIqQvbMd2piPntV4k+RE2f8AuVxh36id1Dq3nt5siorlAp0A2SO53oe5+wxZPgvpyHLo8kMReqDGNdRUcWSLO3fHHpHhXLK3miM2NlDbj71xfa/vhpQBQANgOBiD+oVvpnRjwMptjOy7bDgY21Y468e68S5y/GdsCcrJl1nMfmoZmBIQG2AHN80aPc742611BoYXkjTzHUelbqz/ANuaG5qhhJ6J1zLHXJJl/wCGm30ywi3kYm2VFZSwY96sUTZG10VSdybPx1GnxMMsoLZlzpoAIDZJN8C/jc8fnCt1jq0UOXjERlU0siIHK0BsCxUm7A4scdqrATOSyZmXy/Md3JpWdV9VDYMR3B2JJ23xLzvhrRldWYY6otQqP1H6jya2okiuDzYx0phbu5yvlJuAMtI0hYnezbHUBqJ59uff5+cZnsvIlOxADEhRakiubUHUv5AvtePem5xlZVi0hx9B4N8833IHO3vid1HOT6I1lCKq2BG4Ukm7LsrXyxIv4rti3IjoSXIFKM0gyqMsbzKY3LAXQGpdjq3r3PqJ7c406vFAZn8lQIdVBLbVVb7+53+1jnk9EziEtI8UIQ0vlpGF57gqARX3sk/YgNmJNLnTqAslCT2PH5rGUFojHWpe/h7KiUebJGuuiSRtfxd8E9/gYUOuZ/Kx5lS8ua1LsYV00hPqvWzNbqa9wK2O14i9GzEWqDyxm5p1XTayMmwoelSdOmxuobfvgvmuiJLI1xSh3IvWwVTsLKBiQwB2NUdu+JnIiEchOwAkEXEnp2Y1Z9VVSytMGAcljWoMuo7kng6tz3373GlutOFsj1C7X5G4Fj7jAHoHQhEa16gh/pA/wB98GcwkoOpGBHeMjn7NyG9r2/zjkyZVc/HQ8SuPEcY3I/Xsg80WiNkBG9OhYNtVGmFA73sfthU6d4Lk80yPKygNY0bHuKvSCKGwocX74d8nKXXUVKk36WqxuRvRI/Y47kYkcjDQMcorGyIpT+DYnYM7PIQANTsSRXAG1VeNZvA8B+hmjPxRHfcgr6j/AL4btOOMjeoLoYg3bjTpX72wbf4BwfcJ8xuCfaB5uinyhHrciwLi0xMqjvYodqoAc/nHvUejO+gJmJIyoILmmZgSCQeBuQDe++DUhoH4HtiNms0imm1cE/SaoEA78X6hsT7+xxlajqZlBG5XfjLJfw8kcgnlZzY1MRagUdvzR47YA5jzXPnSEspaix3s1dWtdj/73w9eMOjtMbAbcVdLp99zrB+ONsLud8OZgiJVjCnSNTazp/O+34GOpc6gfI7nLkxEk0IHyGeEBLJZbsButi9pACCVbYUGFb7Ngp03qyplUKSJl3EhZY9LlZebR/SRXG+9AD3Omf0jwbMTpmWFkJJLKSJNuCG0Xz2vDdmRPDCPICGRDaBgCOO+33OoUf74R8yNQ7H3jpjcLvxC0LqQGTSV4BUgih2BHtjoBhSgXPqzFYsnHr9TeWWDEXufp0F9ybCgb7g4LeHsxO6v5zK4BpHAFkb3q0+kkV2AxBgB0ZdCToiFxjYjGmMJxMmUqe4ysahse6sLc1T5/mChvSzOas2tc8irbaq3vGoyhI1nYD43+9e2LJy3WMrK1+dFCqj1eYN3rf0saXm9hZ4Nb43z/SUzJR0EqIRsLALfJDC1H33PstY9E5yosip5/sg/SZWT5RaBDhj+oVRG/wA8/fEjIdP8yQRKCXYGrIFcb/YAHb5w1zfwql4Y4g0rHTQ0s217KVWrNbhf3Pcz0PocsUa76Cb1RhgL9tThbHbZa+5wuX1BVbmX0xseZB8OeGBCwJJc9wBt+94c8uooURXArjEbp2XZEAdg7/qKih+B/wBcSxjzmyltkzvXGANTt/72xqWN/GNS2PLwnKPU3vC51zxX/DyeX5N7XqdtIP8Ay7Gx83hgvGrhdiQCRwSASPt7YdWF7k3RiPiagfK+IB/D+fmlWNdVALqtt9jR3/Yni8V/1zq8jTu1kKhPllaBAcEagaF2uxJ3r8Ue8UJPMWWQM0UeoqKUkkXp+mjvsL3rvfdagyztWqMsL2DBwPjv2vHpYEVfkZyZOTfGa9DYlt1LEhiCtliSDyTsAar32/BL9amU5eJWikXc608wg2O4BBFWRvXv98dYegExwuJoGLkXGHBZAT3oUp0m+DW91hdllpRZNBjQcbChxV7EbffHWMi7C3OV9aM8lyC8IS1VuOd/7bGx/wBcdus9PRGAWy4FyKDYBoXZ7NySBYHY9hAk1Dnaxtzib0rK5ickIrsteqr4J/6n47e+E2AbMQb1IUM3l0697Fe239/2/wA4NZMh41aOMyZlnI0AajprfYGxdjeq9J+TgtFksrliwkWdiQD5ZRCguzR1d/8AmHttixfCPR8skNJ5EjteoxiM6Q22gFOwGx9zfahiYYP0JYYa7lXrk80TE8BJZFtSpIBGsgabAJIJIZq3JB7gmwV8LAAZzOzKzR6ajJJVDQpLsl218bCycKP+ouaywzKxxroaIU0qkmmBJ0qLrUDVt2J+DheyPWJY5jmFnaSQA7uC+o7qNWottoJNtxxg8L0ZuYVqlk9W6+YWZI4ioCF/NaOTywaveh6v/wBTt9gRjfwj4hOajAfSZAoLFAdJHzf0tvuu49j2FYZLqkxkKhUdnbUUdAwY7nj8ngjDv4N0AyTyQR5QkKlISsZsk8Fj6j37bCu+OfJiVVl0yl2/EeRj28c1cHg39sejHAZ2ieyOqgsdgBufgb4CZPr6yz+SyBQwOkOCGPfcEDYrv8Yn5jNJbRnXenUTobTX/NWm/i7xXGZ6mn8SzJGHfQ6JqVg+pgwtAbBYHgjbYe5xTGoPcjlfjVSyh1GE8Sxn1aNnG7H9PO5+MbS5tFJDOFoWbNULq/32/OKlmzRgSLVFIoViP5isoVuQV4F7C/t+MFPFEzyxpOkhlfSFfQfSvGrYHSCTV+nfb4xQ4CDQinNsiupZRANbA+3/AGxpLwTpLGuBVmvayB+5wnf6dg6GfW5DWCm2lSD7c6q29tv2cg2IZF4tRlkbktzlnc9HEuuVxGt1bGhZ7Y9yGZjljDxMGQ7AjjbbCrLluqya45PJMbAi6Sj7bEE18Ef7Hn0DwjNDL5xmSJv6YQSD8EGlr96/GHpQO5MZXLaXUc7rG2rHMsMeXiZadE91/wBsZeNScZeE5TUZteA2b8T5aJ2jkkYMpojypD/cLR/GCxxsHPucFXHmA34gbyIgykpHq4T0rq23oY7XY37jj741VqxwnzyR0DqZm+lFFsd/wB+TjbMFASQsKg2FVT7hQD9rq8dhjnGTQJFGtxYNfG22NgcISZQKJ0xgx4MBfE2azESa4XjAqtJAL3fK3sdu2CqljUVyEW4dx4cVzB4kzQNPKfaiACPtsDf3xw6v1syvAJJPTEQxsatRU2e5Uk7DjbfbsehPSsT3OUerXwI7+JOs/wANHa6TI16Q3wL3AIPx+cKsv+oLCUUiPHQsbhrKi9+Nm+P+wDr3WP4iZpGAruVrYfpHAsDbnfn3xGEf8lqjreg5Ox4teTQ77fn47MXpVVfkJDLncseJqNk/jWwG0oP+Hki/m7/sMSOleKFlK+ZOYQjBmIVT5igGxsL3NdvffCbmOmgxp5YfWB/MFX9zdkfAAAxDGX3AB3oe3537e+/YjFB6bH3UmcuS7uH/ABh1TVOxU1HQ01uG2F78bE1sThj6N16SXLeSulZSQtqoAVCNWqgK1GyABxz2wBbL64YtIDMBp0Btw2x1CjZWqA+QT74kdLyUmXYOWMRbYx6CTpHJ2N1t8DjnG5BBS6m4/PkepMz3QXhICPqBP0Ko8wbb97I+11+MSY+gs8OvUVVWCkEenXe1kL9Vsu53s1Yrct4d6t50OpEWMo1EbW5G+lbIG42vVziL1rON5LqmVfLBKa1Cna2DUwo6vpJ5ve+2Jr9mO5QY0vkB3FbP9UJzQ0v54QKGkYsN+WAGxCg2B35wzw9KhzCiTy6dgNJU1RJr9LbC9+21+2EvqOY8+3CFXJJZiBR+5oAm7NnffEzJFSABmTDpYsGFn1cXsRW36vYGr4xXiuomN6Y1GjqPhCBjwlBgA9HXV2wcXpLEbavc3WBQ8Oxy5aPMQwfWNRCsVPqdrGk7Uq6QKu9yffAjN5yeRxGzS+s3Tc2d70qOd7r9u2CUTFsuuVQlpY31a9VJoagV0HkhmUbEndh3ONvwY4IbsQFnsr5BVgGSx6SW3JGzAFTtR23wz+COlGVFfZYw16Xj1iQVRok0KO1gYjdQyf8AKG4mUXGsul6jcG/LCW132N9jteG/wz0f+HS2dWL1XpKkf8O7E8/AO2JZslL+ZseIe5+Iay6qihVrSNtve/jveOrNiH1DKLNG0bFgGBFqSCPnb/B2xy6R0yPLxiOMHSCTbGySeceea7nfu6rUH5rrOYp444JDKHpVYL5RFjfVr1EaBe4A4A3vHfKqScvHMitL5ZeQ1srekV7bkng/pwWGNrw2TNyABHUyqAdSJm8iHIOx+CLGPGyAIIJBHYadgNtuTe97/OJhrHl45+5apxy2UWMUooe3b8DHfGoxlYNwVNrxqSb+MeE48vGuGptjU49XjHhxrmqYGxhbELL5VkZiZZHDEnS9EC/6TVgDfa63+MSQcYwAmdca6santzt7E/bf3/OPcCbRgYZj06hG/wCRpI9rvf8AYHEpXI24+Me4zDHcRZ6DjHcAEsQANySaAx5jMKBKE6m+sDckAWBZIG5NAX8k/wB8Qs/5M6eUZgNZIUqwsleQvv7ED7YzGYsiebnNkyb4wBmfB0C2GzBDhS1NpFjge9b/AL/GBGa6nk0WNYoUKAHSzUzswu3JKgglqAAFUO3OMxmO/wBNbLZM4MpCmlFQGc+pADxRs9i2o7/ejWJD5jLMdo3jWxRRhv8AFMK323rasZjMXqRORp2vLoSVeZl0GgzcE1qBCiiNyLOx5IwSk6hmJYxF/CRGMKKZYqoAEAKwN972PN+5GMxmJ5MhTqVw/I1BhlnXTLJHp5C6V06dJsmgPnkm+PYYIdHmzecm0Iry6V/UbAVj+ok6dz2sXXeseYzDKoyCyIci7qM0XTFyKKMxAr1ZVvSX5s0F2AF9yBzjTqPi1UX0RWzKBbkFa3PA5G/xzjMZiOXGA0V8jLpYE6bEJwT6BuFr9Ki+WvYbbWd/a8c5Ms8LyBUOlGrSh1Ei6FjcNsO4IF8YzGYmNGTQajHP4bM0qzNJKrMoIZECgbfqvfV3N/bG2Y8JnSNLRPKG126soa2v1BSdrU7VXPAx5jMT9xh5npDGoE6ZPp4yakBMxMWOu4ipVGQfSQaJB3PF7e+FrxBDF5rzLPMjsQyo8JVqP9J1qQq1W4H53OMxmK42LdyOYcRqFuneKUjYKZpJYwqKPMRQ5O9mwSKG31NZrnDlDKGUMpBUiwRwRj3GYj6hANiV9M5Y0ZAz3WEiI9JddQV2Uj0E8WDV/i6rE9HBAINgi+D3/wAYzGYjkUBQZfG1sQZjgmtyKNkCt9jsbHHfauMeSSBRbEAe54x7jMR7NSx1Nrx4TjzGYWGeY8JxmMxppgxl49xmDCBNTj0YzGYBMIEzGVjMZgXNxE//2Q==",
      technologies: ["Python", "Scikit-learn", "LightGBM", "Streamlit", "Pandas", "Git LFS"],
      github: 'https://github.com/SRAVAN-DSAI/Flood_prediction_model',
      demo: 'https://flood-prediction-model.streamlit.app/',
      category: 'Machine Learning',
      featured: true,
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
      metrics: { rSquared: '94%'},
      tags: ['Regression', 'Deployment', 'Streamlit', 'Feature Engineering'],
      complexity: 'Advanced',
      duration: '1 week',
      team: 'Solo Project'
    },
    {
      id: 1,
      title: 'NLP News Article Classification with Hugging Face Transformers',
      description: 'Advanced sentiment analysis using pre-trained transformers, fine-tuned for domain-specific text classification with 96% accuracy.',
      longDescription: 'Leveraging BERT and RoBERTa models from Hugging Face, this project implements multi-class sentiment analysis with custom fine-tuning. Features include model comparison, attention visualization, and deployment via REST API.',
      image: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png?auto=format&fit=crop&q=80&w=1770",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Streamlit", "Pandas"],
      github: 'https://github.com/SRAVAN-DSAI/nlp-news-classifier',
      demo: 'https://nlp-news-classifier.streamlit.app/',
      category: 'NLP',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: { accuracy: '96.1%', f1Score: '0.94', inference: '50ms' },
      tags: ['Transformer', 'Fine-tuned', 'Production'],
      complexity: 'Advanced',
      duration: '5 days',
      team: 'Solo Project'
    },
    {
      id: 2,
      title: "UrbanSound8K Audio Classification with PyTorch",
      description: "Advanced audio classification using a fine-tuned ResNet18 model, achieving 96.37% accuracy on urban sound detection.",
      longDescription: "This project implements a convolutional neural network (ResNet18) fine-tuned with PyTorch to classify audio from the UrbanSound8K dataset into 10 categories. Features include real-time spectrogram generation, batch processing, and deployment via Streamlit, with visualizations using Plotly.",
      image: "https://cdn-uploads.huggingface.co/production/uploads/6290ec00a29097b211b94f0f/IV-nahjZbufzIzGBUP-_e.png",
      technologies: ["Python", "PyTorch", "Librosa", "Streamlit", "Plotly"],
      github: "https://github.com/SRAVAN-DSAI/Sound-Classifier",
      demo: "https://waveform-classifier.streamlit.app/",
      category: "Audio Processing",
      featured: true,
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      metrics: {accuracy: "96.37%",f1Score: "95.80%",inference: "100ms"},
      tags: ["Audio Classification", "Deep Learning", "Real-time", "Production"],
      complexity: "Advanced",
      duration: "1 week",
      team: "Solo Project"
    },
    {
      id: 3,
      title: 'Logistics and Supply Chain Analysis',
      description: 'End-to-end data analysis project using SQL, Power BI, and Tableau to optimize supply chain performance and assess risk.',
      longDescription: 'Utilized SQL for advanced data modeling (star schema, feature engineering) and created interactive dashboards in Power BI and Tableau to visualize key insights on cost drivers, route risk, and operational efficiency.',
      image: "https://acropolium.com/img/articles/supply-chain-analytics-software/img09.jpg",
      technologies: ["SQL", "Power BI", "Tableau", "MySQL", "Git"],
      github: "https://github.com/SRAVAN-DSAI/Logistics-Analysis",
      demo: "https://public.tableau.com/shared/J2C5Q5HZ6?:display_count=n&:origin=viz_share_link",
      category: 'Data Analysis',
      featured: true,
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-500',
      metrics: { dashboards: '2', insights: '5+', queries: '20+' },
      tags: ['SQL', 'Dashboarding', 'Data Modeling'],
      complexity: 'Advanced',
      duration: '1 week',
      team: 'Solo Project'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'Machine Learning', label: 'ML', count: projects.filter(p => p.category === 'Machine Learning').length },
    { id: 'NLP', label: 'NLP', count: projects.filter(p => p.category === 'NLP').length },
    { id: 'Audio Processing', label: 'Audio', count: projects.filter(p => p.category === 'Audio Processing').length },
    { id: 'Data Analysis', label: 'Data Analysis', count: projects.filter(p => p.category === 'Data Analysis').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Expert': return 'bg-red-100 text-red-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Project Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore my featured machine learning projects from end-to-end.
        </p>
      </div>

      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-12">
        <TabsList className="grid w-full grid-cols-5 gap-1 h-auto p-1 bg-gray-100 rounded-xl">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex flex-col items-center p-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
            >
              <span className="font-medium text-sm">{category.label}</span>
              <span className="text-xs text-gray-500 mt-1">({category.count})</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeFilter} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <project.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                  
                  <div className={`absolute bottom-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {project.complexity}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg shadow-lg" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-sm`}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{project.duration}</span>
                      <span>•</span>
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-lg p-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-sm font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs text-gray-500">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always excited to work on challenging data science projects. Let's discuss how we can leverage ML to solve your business problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
            <a href="#contact" className="flex items-center">
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
              View All Code
              <Github className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjects;
